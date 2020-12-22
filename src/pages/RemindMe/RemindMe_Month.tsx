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
import RemindMeCard from "../../components/RemindMe/RemindMeCard";
//! just for testing a database of Tasks of a day
// Database
import Data from "../../database/todo.json";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/RemindMe/remindme_month.scss";
/* Global Theme */
import "../../theme/variables.scss";








/* -----
RemindMe_Month.tsx
----- */

const RemindMe_Month: React.FC = () => {
  /* variables */
  var date = DateTime.local(); //current local time
  let countTodo = 0; //counter for todos und selected date period (when 0, blank screen will be shown)

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
        <div className="remindme_month-wrapper">
           {/*
            DateSlider for switching between dates
          */}
          <DateSlider
            dateSlide={dateSlide}
            setDateSlide={setDateSlide}
            variant="month"
          />

          {/*
            Function for mapping all todos that fit to current selected date period
          */}
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
              <p style={{ color: "#696e7f" }}>No Reminders</p>
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
