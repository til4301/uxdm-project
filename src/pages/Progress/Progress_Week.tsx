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
import ProgressCard from "../../components/Progress/ProgressCard";
//! just for testing a database of Tasks of a day
// Database
import Data from "../../database/todo.json";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/Progress/progress_week.scss";
/* Global Theme */
import "../../theme/variables.scss";








/* -----
Progress_Week.tsx
----- */

const Progress_Week: React.FC = () => {
  /* variables */
  var date = DateTime.local(); //current local time
  var numberCheckedSubTasks = 0; //number of checked subTasks
  var tempNumberCheckedSubTasks = 0; //temporary storage for number of checked subTasks
  var allTasks = 0; //number of all tasks
  var allCheckedTasks = 0; //number of all checked tasks

  /* states */
  const [dateSlide, setDateSlide] = useState(""); //selected date for dateslider
  const [showAddTask, setShowAddTask] = useState(false); //defines if addtask popup is shown or not

  /* useEffect - function is called once when component mounts*/
  useEffect(() => {
    setDateSlide(date.toISODate()); //current local time is set for the dateslider
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
          */}
          {Data.ToDos.map((Task, i) => {
            if (
              DateTime.fromISO(Task.date)
                .startOf("week")
                .equals(DateTime.fromISO(dateSlide).startOf("week"))
            ) {
              Task.subTasks.map((subTask) => {
                allTasks = allTasks + 1;
                if (subTask.checked) {
                  allCheckedTasks = allCheckedTasks + 1;
                }
              });
            }
          })}

          <ProgressCard
            task="All Tasks"
            count={7}
            numberSubTasks={allTasks}
            numberCheckedSubTasks={allCheckedTasks}
            variant="normal"
          />

          {/*
            Function for mapping all todos that fit to current selected date period
          */}
          {Data.ToDos.map((Task, i) => {
            if (
              DateTime.fromISO(Task.date)
                .startOf("week")
                .equals(DateTime.fromISO(dateSlide).startOf("week"))
            ) {
              Task.subTasks.map((subTask) => {
                if (subTask.checked) {
                  tempNumberCheckedSubTasks = tempNumberCheckedSubTasks + 1;
                }
              });
              numberCheckedSubTasks = tempNumberCheckedSubTasks;
              tempNumberCheckedSubTasks = 0;
              return (
                <ProgressCard
                  task={Task.task}
                  count={i + 1}
                  numberSubTasks={Task.subTasks.length}
                  numberCheckedSubTasks={numberCheckedSubTasks}
                  variant="normal"
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
