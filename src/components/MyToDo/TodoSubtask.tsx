/* -----
Imports
----- */

// React and Ionic
import { IonCheckbox, IonCol, IonGrid, IonRow } from "@ionic/react";
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
import "../../design/MyTodo/todosubtask.scss";
/* Database */
import { db } from "../../database/firebase";
/* Global Theme */
import "../../theme/variables.scss";

/* -----
.TodoSubtask.tsx
----- */

// Props
interface Props {
  subtask: string;
  checked: boolean;
  parentId: number;
  id: number;
}

//Function
const TodoSubtask: React.FC<Props> = ({ subtask, checked, parentId, id }) => {
  /* variables */
  const parent = parentId.toString();
  const subtaskId = id.toString();

  /* functions */
  const changeChecked = (checked: boolean) => {
    db.collection("subtask")
      .doc(subtaskId)
      .update({ checked: checked });
  };

  return (
    <div className="todo-subtask-wrapper">
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="3" />
          <IonCol size="1">
            <IonCheckbox
              checked={checked}
              onIonChange={(e) => changeChecked(e.detail.checked)}
              class="todo-subtask-checkbox"
            />
          </IonCol>
          <IonCol size="8">
            <p
              className={
                checked ? "todo-subtask-header-checked" : "todo-subtask-header"
              }
            >
              {subtask}
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default TodoSubtask;
