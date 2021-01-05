/* -----
Imports
----- */

// React and Ionic
import { IonAlert } from "@ionic/react";
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
import React from "react";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/AddTask/addtodoalert.scss";
/* Global Theme */
import "../../theme/variables.scss";





/* -----
AddTodoSelectTaskName.tsx
----- */

//Props
interface Props {
  showSelectedTaskName: boolean;
  setShowSelectedTaskName: Function;
  setSelectedTaskName: Function;
  setShowAddTask: Function;
}

//Function
const AddTodoSelectTaskName: React.FC<Props> = ({
  showSelectedTaskName,
  setShowSelectedTaskName,
  setSelectedTaskName,
  setShowAddTask,
}) => {
  /* return */
  return (
    <IonAlert
      isOpen={showSelectedTaskName}
      onDidDismiss={() => {
        setShowAddTask(true);
        setShowSelectedTaskName(false);
      }}
      cssClass="selectDate-alert"
      header={"Taskname"}
      subHeader={"Please enter a valid name for your task."}
      inputs={[
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
