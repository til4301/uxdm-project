/* -----
Imports
----- */

// React and Ionic
import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonAlert } from "@ionic/react";

// Luxon
import { DateTime } from "luxon";

// Material UI

// Components
import TodoCard from "../TodoCard";

//! just for testing a database of Tasks of a day
// Database
import Data from "../../database/todo.json";

// Resources

/* ----- 
Design
----- */

/* MyTodo design */
import "../../design/addtodoalert.scss";

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
import "../../theme/variables.scss";

/* -----
AddTodoSelectDate.tsx
----- */

interface Props {
  showSelectDate: boolean;
  setShowSelectDate: Function;
  setShowAddTask: Function;
  setSelectedDate: Function;
}

const AddTodoSelectDate: React.FC<Props> = ({
  showSelectDate,
  setShowSelectDate,
  setShowAddTask,
  setSelectedDate,
}) => {
  /* states */

  /* variables */
  const min = "2000-01-01";
  const max = "2049-12-31";

  /* return */
  return (
    <IonAlert
      isOpen={showSelectDate}
      onDidDismiss={() => {
        setShowAddTask(true);
        setShowSelectDate(false);
      }}
      cssClass="selectDate-alert"
      header={"Date & Time"}
      subHeader={"Please select a valid date and time."}
      inputs={[
        // input date with min & max
        {
          name: "SelectDate",
          type: "datetime-local",
        },
      ]}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Ok",
          handler: (alertData) => {
            if (
              DateTime.fromISO(min) < DateTime.fromISO(alertData.SelectDate) &&
              DateTime.fromISO(max) > DateTime.fromISO(alertData.SelectDate)
            ) {
              setSelectedDate(alertData.SelectDate);
            }
          },
        },
      ]}
    />
  );
};

export default AddTodoSelectDate;
