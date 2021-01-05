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
import AddTaskSuccess from "../../components/AddTask/AddTaskSuccess";
// Components
import DateSlider from "../../components/DateSlider";
import ProgressCard from "../../components/Progress/ProgressCard";
/* MyTodo design */
import "../../design/Progress/progress_week.scss";
// Database
import { db } from "../../firebase";
/* Global Theme */
import "../../theme/variables.scss";

/* -----
Progress_Week.tsx
----- */

const Progress_Week: React.FC = () => {
  /* variables */
  var date = DateTime.local(); //current local time
  var numberSubTasks = 0; //number of checked subTasks
  var numberCheckedSubTasks = 0; //number of checked subTasks
  var tempNumberCheckedSubTasks = 0; //temporary storage for number of checked subTasks
  var allTasks = 0; //number of all tasks
  var allCheckedTasks = 0; //number of all checked tasks

  /* states */
  const [dateSlide, setDateSlide] = useState(""); //selected date for dateslider
  const [showAddTask, setShowAddTask] = useState(false); //defines if addtask popup is shown or not
  const [showSuccess, setShowSuccess] = useState(false); //defines if addtask success popup is shown or not


  const [data, setData] = useState<any[]>([]);

  /* useEffect - function is called once when component mounts*/
  useEffect(() => {
    setDateSlide(date.toISODate()); //current local time is set for the dateslider

    db.collection("todo")
      //.where("user", "==", "Tim")
      .onSnapshot((snapshot) => {
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
        <div className="progress_week-wrapper">
          {/*
            DateSlider for switching between dates
          */}
          <DateSlider
            dateSlide={dateSlide}
            setDateSlide={setDateSlide}
            variant="week"
          />

          {/*
            Showing one overall task progress card at the top    
          
          {data.length > 0 &&
            data.map((Todo, i) => {
              if (
                DateTime.fromISO(Todo.data.date)
                  .startOf("week")
                  .equals(DateTime.fromISO(dateSlide).startOf("week"))
              ) {
                // Fetching total number of subtasks
                db.collection("subtask")
                  .where("parentId", "==", Todo.id)
                  .onSnapshot((snapshot) => {
                    let tempArray: any = [];
                    snapshot.forEach((item) => {
                      tempArray.push(item);
                    });
                    allTasks = allTasks + tempArray.length;
                  });

                // Fetching number of checked subtasks
                db.collection("subtask")
                  .where("parentId", "==", Todo.id)
                  .where("checked", "==", true)
                  .onSnapshot((snapshot) => {
                    let tempArray: any = [];
                    snapshot.forEach((item) => {
                      tempArray.push(item);
                    });
                    allCheckedTasks = allCheckedTasks + tempArray.length;
                  });
              }
            })}

          <ProgressCard
            task={"All Tasks"}
            count={7}
            numberSubTasks={allTasks}
            numberCheckedSubTasks={allCheckedTasks}
            variant="normal"
          />
*/}
          {/*
            Function for mapping all todos that fit to current selected date period
          */}
          {data.length > 0 &&
            data.map((Todo, i) => {
              if (
                DateTime.fromISO(Todo.data.date)
                  .startOf("week")
                  .equals(DateTime.fromISO(dateSlide).startOf("week"))
              ) {
                return (
                  <ProgressCard
                    task={Todo.data.task}
                    count={i + 1}
                    variant="normal"
                    parentId={Todo.id}
                  />
                );
              }
            })}
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

export default Progress_Week;
