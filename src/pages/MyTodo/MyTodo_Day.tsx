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
//! just for testing a database of Tasks of a day
// Database
import Data from "../../database/todo.json";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/MyTodo/mytodo_day.scss";
/* Global Theme */
import "../../theme/variables.scss";

import { db } from "../../firebase";

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

  const [data, setData] = useState([]);

  /* useEffect - function is called once when component mounts*/
  useEffect(() => {
    setDateSlide(date.toISODate()); //current local time is set for the dateslider
    db.collection("user")
      .doc("jGdXfe0OFdTzxMATHqH0")
      .onSnapshot((result) => {
        console.log(result.data());
      });
    db.collection("todo")
      //.where("user", "==", "Tim")
      .onSnapshot((snapshot) => {
        let temp: any = [];
        snapshot.forEach((item) => {
          //temp.push(item.data());
          console.log({ data: item.data(), id: item.id });
        });
        setData(temp);
      });
    set();
  }, []);

  const set = () => {
    db.collection("todo")
      .doc("D2tkaSpIsrz1kKN2tVjM")
      .set({
        user: "Los Angeles",
        task: "CA",
        subtasks: {
          taskname: "asdas",
          id: 2,
        },
      });
  };

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

          {data.length > 0 &&
            data.map((Todo) => {
              return <h1>{Todo["task"]}</h1>;
            })}

          {/*
            Function for mapping all todos that fit to current selected date period
          */}
          {Data.ToDos.map((Task, i) => {
            if (DateTime.fromISO(Task.date).toISODate() === dateSlide) {
              countTodo = countTodo + 1;
              return (
                <TodoCard
                  id={Task.id}
                  task={Task.task}
                  subTasks={Task.subTasks}
                  checked={Task.checked}
                  //checked={Task.data.checked}
                  solar={Task.solar}
                  projects={Task.projects}
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
