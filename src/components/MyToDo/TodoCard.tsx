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
import React, { useState } from "react";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/MyTodo/todocard.scss";
/* Global Theme */
import "../../theme/variables.scss";
import ProjectTag from "./ProjectTag";
import TodoSolar from "./TodoSolar";
// Components
import TodoSubtask from "./TodoSubtask";






/* -----
.TodoCard.tsx
----- */

// sub Prop
interface subTask {
  subtask: string;
  checked: boolean;
  id: number;
}

//Props
interface Props {
  task: string;
  subTasks: subTask[];
  solar: string;
  checked: boolean;
  id: number;
  projects: string[];
}

//Function
const TodoCard: React.FC<Props> = ({
  task,
  subTasks,
  solar,
  checked,
  id,
  projects,
}) => {
  /* states */
  const [expanded, setExpanded] = useState(false);
  const [numberSubtask, setNumberSubtask] = useState(3);

  /* variables */
  var numberCheckedTasks = 0;

  /* return */
  return (
    <div className={expanded ? "todo-card-expanded" : "todo-card"}>
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="2" style={{ textAlign: "center" }}>
            <IonCheckbox checked={checked} class="todo-card-checkbox" />
          </IonCol>
          <IonCol size="7" onClick={() => setExpanded(!expanded)}>
            <p className={checked ? "todo-header-checked" : "todo-header"}>
              {task}
            </p>
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
      {/*
        expanded content (with subtask, projects, solar etc.)
      */}
      <div className={expanded ? "todo-expanded" : "todo"}>
        <IonGrid>
          <IonRow style={{ display: "flex", alignItems: "center" }}>
            <IonCol size="2"></IonCol>
            <IonCol size="10">
              {projects.map((project) => (
                <ProjectTag project={project} />
              ))}
              <TodoSolar solar={solar} />
            </IonCol>
          </IonRow>
        </IonGrid>
        {/*
          mapping all subtasks
        */}
        {subTasks.map((subTask, i) => {
          if (subTask.checked) {
            numberCheckedTasks = numberCheckedTasks + 1;
          }

          return (
            <TodoSubtask
              subtask={subTask.subtask}
              checked={subTask.checked}
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
