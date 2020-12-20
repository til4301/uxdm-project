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
import AddTaskDialog from "../components/AddTask/AddTaskDialog";
import RemindMeCard from "../components/RemindMeCard";

//! just for testing a database of Tasks of a day
// Database
import Data from "../database/todo.json";

/* ----- 
Design
----- */

/* MyTodo design */
import "../design/remindme_month.scss";

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
RemindMe_Month.tsx
----- */

const RemindMe_Month: React.FC = () => {
  /* variables */
  var date = DateTime.local();
  let countTodo = 0;

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
        <div className="remindme_month-wrapper">
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
          {Data.ToDos.map((Task, i) => {
            if (
              DateTime.fromISO(Task.date).toFormat("y" + "-" + "LL") ===
              DateTime.fromISO(dateSlide).toFormat("y" + "-" + "LL")
            ) {
              countTodo = countTodo + 1;

              return (
                <RemindMeCard
                  task={Task.task}
                  id={Task.id}
                  date={Task.date}
                  isActive={Task.reminder}
                />
              );
            }
          })}
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
              <p style={{ color: "#696e7f" }}>No Reminders</p>
            </div>
          ) : null}
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
      <div className="remindme_month-addtask-button-wrapper">
        <IonButton
          class="remindme_month-addtask-button"
          onClick={() => setShowAddTask(true)}
        >
          <IonIcon
            icon={add}
            class="remindme_month-addtask-button-icon"
          ></IonIcon>
        </IonButton>
      </div>
    </IonPage>
  );
};

export default RemindMe_Month;
