/* -----
Imports
----- */

// React and Ionic
import { IonAlert, IonCheckbox, IonCol, IonGrid, IonRow } from "@ionic/react";
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
import { type } from "os";
import React, { useEffect, useState } from "react";

/* MyTodo design */
import "../../design/MyTodo/todoaddsubtask.scss";
/* Database */
import { db } from "../../firebase";
/* Global Theme */
import "../../theme/variables.scss";
import addTaskIcon from "../../resources/addTask_icon.svg";

/* -----
.TodoAddSubtask.tsx
----- */

// Props
interface Props {
  parentId: number;
}

//Function
const TodoAddSubtask: React.FC<Props> = ({ parentId }) => {
  /* variables */
  const parent = parentId.toString();
  /* states */
  const [addSubtaskAlert, setAddSubtaskAlert] = useState(false);

  return (
    <div className="todoaddsubtask-wrapper">
      <IonGrid>
        <IonRow
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setAddSubtaskAlert(true)}
        >
          <IonCol size="3" />
          <IonCol size="1">
          <img src={addTaskIcon} alt="addTask" className="todoaddsubtask-addicon"/>
          </IonCol>
          <IonCol size="8">
            <p className="todoaddsubtask-header">Add Subtask</p>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonAlert
        isOpen={addSubtaskAlert}
        onDidDismiss={() => setAddSubtaskAlert(false)}
        header={"Add Subtask"}
        subHeader={"Please enter a valid name."}
        inputs={[
          // input date with min & max
          {
            name: "Subtask",
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
              if (alertData.Subtask !== "") {
                db.collection("subtask").doc().set({
                  checked: false,
                  parentId: parent,
                  subTask: alertData.Subtask,
                });
                console.log(alertData.Subtask);
                setAddSubtaskAlert(false);
              } else {
                console.log("False");
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default TodoAddSubtask;
