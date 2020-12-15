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
import TodoSubtask from "./TodoSubtask";
import TodoTag from "../components/TodoTag";
import TodoSolar from "./TodoSolar";

/* -----
Design
----- */

/* MyTodo design */
import "../design/todocard.scss";

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
.TodoCard.tsx
----- */

interface subTask {
  subtask: string;
  checked: boolean;
  id: number;
}

interface Props {
  task: string;
  subTasks: subTask[];
  solar: string;
  checked: boolean;
  id: number;
  tags: string[];
}

const TodoCard: React.FC<Props> = ({
  task,
  subTasks,
  solar,
  checked,
  id,
  tags,
}) => {
  /* states */
  const [expanded, setExpanded] = useState(false);
  const [numberSubtask, setNumberSubtask] = useState(3);
  const [numberCheckedTasks, setNumberCheckedTasks] = useState(0);

  const changeCheckedNumber = (value: number) => {
    setNumberCheckedTasks(numberCheckedTasks + value);
  };

  function showSolar(solar: string) {
    console.log(solar);
  }

  return (
    <div className={expanded ? "todo-card-expanded" : "todo-card"}>
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="2" style={{ textAlign: "center" }}>
            <IonCheckbox checked={checked} class="todo-card-checkbox" />
          </IonCol>
          <IonCol size="7" onClick={() => setExpanded(!expanded)}>
            <p className="todo-header">{task}</p>
          </IonCol>
          <IonCol
            size="3"
            style={{ textAlign: "right" }}
            onClick={() => setExpanded(!expanded)}
          >
            <p className="todo-taskCount">
              {numberCheckedTasks}/{subTasks.length} Tasks
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
      <div className={expanded ? "todo-expanded" : "todo"}>
        <IonGrid>
          <IonRow style={{ display: "flex", alignItems: "center" }}>
            <IonCol size="2"></IonCol>
            <IonCol size="10">
              {tags.map((tag) => (
                <TodoTag tag={tag} />
              ))}
              <TodoSolar solar={solar} />
            </IonCol>
          </IonRow>
        </IonGrid>
        {subTasks.map((subTask) => {
          return (
            <TodoSubtask
              subtask={subTask.subtask}
              checked={subTask.checked}
              changeCheckedNumber={changeCheckedNumber}
              parentId={id}
              id={subTask.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoCard;
