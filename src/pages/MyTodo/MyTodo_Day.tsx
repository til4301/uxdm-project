/* -----
Imports
----- */

// React and Ionic
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
/* Core CSS for Ionic */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/normalize.css";
/* Optional CSS for Ionic */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { add } from "ionicons/icons";
// Luxon
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import AddTaskDialog from "../../components/AddTask/AddTaskDialog";
// Components
import DateSlider from "../../components/DateSlider";
import TodoCard from "../../components/MyToDo/TodoCard";
/* MyTodo design */
import "../../design/MyTodo/mytodo_day.scss";
/* Global Theme */
import "../../theme/variables.scss";
// Database
import { db } from "../../database/firebase";
import AddTaskSuccess from "../../components/AddTask/AddTaskSuccess";

/* -----
MyTodo_day.tsx
----- */

const MyTodo_Day: React.FC = () => {
  /* variables */
  var date = DateTime.local(); //current local time
  let countTodo = 0; //counter for todos und selected date period (when 0, blank screen will be shown)

  /* states */
  const [dateSlide, setDateSlide] = useState(""); //selected date for dateslider
  const [showAddTask, setShowAddTask] = useState(false); //defines if addtask popup is shown or not
  const [showSuccess, setShowSuccess] = useState(false); //defines if addtask success popup is shown or not

  const [data, setData] = useState<any[]>([]);

  /* useEffect - function is called once when component mounts*/
  useEffect(() => {
    setDateSlide(date.toISODate()); //current local time is set for the dateslider

    db.collection("todo").onSnapshot((snapshot) => {
      let tempArray: any = [];
      snapshot.forEach((item) => {
        let tempObject: any = { data: item.data(), id: item.id };
        tempArray.push(tempObject);
      });
      setData(tempArray);
    });
  }, []);

  /* return */
  return (
    <IonPage>
      <IonContent>
        <div className="mytodo_day-wrapper">
          {/*
            DateSlider for switching between dates
          */}
          <DateSlider
            dateSlide={dateSlide}
            setDateSlide={setDateSlide}
            variant="day"
          />

          {/*
            Function for mapping all todos that fit to current selected date period
          */}
          {data.length > 0 &&
            data.map((Todo, i) => {
              if (DateTime.fromISO(Todo.data.date).toISODate() === dateSlide) {
                countTodo = countTodo + 1;
                return (
                  <TodoCard
                    id={Todo.id}
                    task={Todo.data.task}
                    solar={Todo.data.solar}
                    projects={Todo.data.projects}
                  />
                );
              }
            })}

          {/*
            Counter of shown ToDos. When 0, then the No ToDos page will be shown.
          */}
          {countTodo === 0 ? (
            <div
              style={{
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "#696e7f" }}>No ToDos</p>
            </div>
          ) : null}
        </div>
      </IonContent>

      {/*
        Dialog for Add Task (opened after click on Add Task button)
      */}
      <AddTaskDialog
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
        setShowSuccess={setShowSuccess}
      />

      {/*
        Dialog for Success Add Task (opened after successful creating of task)
      */}
      <AddTaskSuccess
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />

      {/*
        Add Task button (opens the dialog for Add Task)
      */}
      <div className="mytodo_day-addtask-button-wrapper">
        <IonButton
          class="mytodo_day-addtask-button"
          onClick={() => setShowAddTask(true)}
        >
          <IonIcon icon={add} class="mytodo_day-addtask-button-icon"></IonIcon>
        </IonButton>
      </div>
    </IonPage>
  );
};

export default MyTodo_Day;
