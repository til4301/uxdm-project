/* -----
Imports
----- */

// React and Ionic
import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

// Components

// Database
import Data from "../database/todo.json";

/* -----
Design
----- */

/* MyTodo design */
import "../design/todosubtask.scss";

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
.TodoSubtask.tsx
----- */

interface Props {
  subtask: string;
  checked: boolean;
  changeCheckedNumber: Function;
  id: number;
  parentId: number;
}

const TodoSubtask: React.FC<Props> = ({
  subtask,
  checked,
  changeCheckedNumber,
  id,
  parentId,
}) => {
  /* useEffect */

  return (
    <div className="todo-subtask-wrapper">
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="3" />
          <IonCol size="1"> 
            <IonCheckbox
              checked={checked}
              onIonChange={() => {
                /*Data.tasks_day
                  .find((x) => x.id === parentId)!
                  .subTasks.find(
                    (x) => x.id === id
                  )!.checked = !Data.tasks_day
                  .find((x) => x.id === parentId)!
                  .subTasks.find((x) => x.id === id)!.checked;*/
              }}
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
