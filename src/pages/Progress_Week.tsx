/* -----
Imports
----- */

// React and Ionic
import React, { useState, useEffect } from "react";
import { IonContent, IonIcon, IonPage, IonButton } from "@ionic/react";
import { add } from "ionicons/icons";

// Luxon
import { DateTime } from "luxon";

// Components
import DateSlider from "../components/DateSlider";
import ProgressCard from "../components/ProgressCard";
import AddTaskDialog from "../components/AddTask/AddTaskDialog";

//! just for testing a database of Tasks of a day
// Database
import Data from "../database/todo.json";

/* ----- 
Design
----- */

/* MyTodo design */
import "../design/progress_week.scss";

/* Core CSS for Ionic */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS for Ionic */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Global Theme */
import "../theme/variables.scss";

/* -----
Progress_Week.tsx
----- */

const Progress_Week: React.FC = () => {
  /* variables */
  var date = DateTime.local();
  var numberCheckedSubTasks = 0;
  var tempNumberCheckedSubTasks = 0;
  var allTasks = 0;
  var allCheckedTasks = 0;

  /* states */
  const [dateSlide, setDateSlide] = useState("");

  const [showAddTask, setShowAddTask] = useState(false);

  /* useEffect */
  useEffect(() => {
    setDateSlide(date.toISODate());
  }, []);

  /* return */
  return (
    <IonPage>
      <IonContent>
        <div className="progress_week-wrapper">
          {
            //* DateSlider *//
          }
          <DateSlider
            dateSlide={dateSlide}
            setDateSlide={setDateSlide}
            variant="week"
          />

          {
            //* Listing one overall ProgressCard *//
          }
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

          {
            //* Listing all Todos *//
          }
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

      {
        //* Dialog for Add Task (opened after click on Add Task button) *//
      }

      <AddTaskDialog
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
      />

      {
        //* Add Task button *//
      }
      <div className="progress_week-addtask-button-wrapper">
        <IonButton
          class="progress_week-addtask-button"
          onClick={() => setShowAddTask(true)}
        >
          <IonIcon
            icon={add}
            class="progress_week-addtask-button-icon"
          ></IonIcon>
        </IonButton>
      </div>
    </IonPage>
  );
};

export default Progress_Week;
