/* -----
Imports
----- */

// React and Ionic
import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonAlert } from "@ionic/react";

// Material UI

// Components
import TodoCard from "../components/TodoCard";

//! just for testing a database of Tasks of a day
// Database
import Data from "../database/todo.json";

// Resources

/* ----- 
Design
----- */

/* MyTodo design */
import "../design/addtodoalert.scss";

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
AddTodoSelectTaskName.tsx
----- */

interface Props {
  showSelectedTaskName: boolean;
  setShowSelectedTaskName: Function;
  setSelectedTaskName: Function;
  setShowAddTask: Function;
}

const AddTodoSelectTaskName: React.FC<Props> = ({
  showSelectedTaskName,
  setShowSelectedTaskName,
  setSelectedTaskName,
  setShowAddTask,
}) => {
  /* states */

  /* return */
  return (
    <IonAlert
      isOpen={showSelectedTaskName}
      onDidDismiss={() => {
        setShowAddTask(true);
        setShowSelectedTaskName(false);
      }}
      cssClass="mytodo_day-alert"
      header={"Prompt!"}
      inputs={[
        // input date with min & max
        {
          name: "TaskName",
          type: "text",
        },
      ]}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (alertData) => {
            setSelectedTaskName(alertData.TaskName);
          },
        },
      ]}
    />
  );
};

export default AddTodoSelectTaskName;
