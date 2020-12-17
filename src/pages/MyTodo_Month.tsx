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
import TodoCard from "../components/TodoCard";
import AddTaskDialog from "../components/AddTaskDialog";

//! just for testing a database of Tasks of a day
// Database
import Data from "../database/todo.json";

/* ----- 
Design
----- */

/* MyTodo design */
import "../design/mytodo_month.scss";

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
MyTodo.tsx
----- */

const MyTodo_Month: React.FC = () => {
  /* variables */
  var date = DateTime.local();

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
        <div className="mytodo_month-wrapper">
          {
            //* DateSlider *//
          }
          <DateSlider
            dateSlide={dateSlide}
            setDateSlide={setDateSlide}
            variant="month"
          />

          {
            //* Listing all Todos *//
          }
          {Data.tasks_day.map((Task, i) => {
            if (
              DateTime.fromISO(Task.date).toFormat("y" + "-" + "LL") ===
              DateTime.fromISO(dateSlide).toFormat("y" + "-" + "LL")
            ) {
              return (
                <TodoCard
                  id={Task.id}
                  task={Task.task}
                  subTasks={Task.subTasks}
                  checked={Task.checked}
                  solar={Task.solar}
                  tags={Task.tags}
                  isLast={false}
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
      <div className="mytodo_month-addtask-button-wrapper">
        <IonButton
          class="mytodo_month-addtask-button"
          onClick={() => setShowAddTask(true)}
        >
          <IonIcon
            icon={add}
            class="mytodo_month-addtask-button-icon"
          ></IonIcon>
        </IonButton>
      </div>
    </IonPage>
  );
};

export default MyTodo_Month;
