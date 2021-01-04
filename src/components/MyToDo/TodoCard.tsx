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
import React, { useEffect, useState } from "react";
/* MyTodo design */
import "../../design/MyTodo/todocard.scss";
/* Global Theme */
import "../../theme/variables.scss";
import ProjectTag from "./ProjectTag";
import TodoSolar from "./TodoSolar";
import TodoAddSubtask from "./TodoAddSubtask";
// Components
import TodoSubtask from "./TodoSubtask";
// Firebase
import { db } from "../../database/firebase";

/* -----
.TodoCard.tsx
----- */

//Props
interface Props {
  task: string;
  solar: string;
  id: number;
  projects: string;
}

//Function
const TodoCard: React.FC<Props> = ({ task, solar, id, projects }) => {
  /* states */
  const [expanded, setExpanded] = useState(false);
  const [checkedNumber, setCheckedNumber] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const [data, setData] = useState<any[]>([]);
 
  /* variables */
  var numberCheckedTasks = 0;
  var numberSubtask = 0;

  /* Databse functions when component mounts */
  useEffect(() => {
    // Fteching all subtasks of parent
    db.collection("subtask")
      .where("parentId", "==", id)
      .onSnapshot((snapshot) => {
        let tempArray: any = [];
        snapshot.forEach((item) => {
          tempArray.push(item);
        });
        setData(tempArray);
      });

    // Fetching number of checked subtasks
    db.collection("subtask")
      .where("parentId", "==", id)
      .where("checked", "==", true)
      .onSnapshot((snapshot) => {
        let tempArray: any = [];
        snapshot.forEach((item) => {
          tempArray.push(item);
        });
        setCheckedNumber(tempArray.length);
      });
  }, []);

  /* useEffect */
  useEffect(() => {
    db.collection("todo").doc(id.toString()).update({ checked: isChecked });
  }, [isChecked]);

  /* Function changing checked depending ob subtasks check */
  useEffect(() => {
    if (checkedNumber === data.length && data.length !== 0) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [checkedNumber]);

  /* return */
  return (
    <div className={expanded ? "todo-card-expanded" : "todo-card"}>
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="2" style={{ textAlign: "center" }}>
            <IonCheckbox checked={isChecked} class="todo-card-checkbox" />
          </IonCol>
          <IonCol size="7" onClick={() => setExpanded(!expanded)}>
            <p className={isChecked ? "todo-header-checked" : "todo-header"}>
              {task}
            </p>
          </IonCol>
          <IonCol
            size="3"
            style={{ textAlign: "right" }}
            onClick={() => setExpanded(!expanded)}
          >
            <p className="todo-taskCount">
              {checkedNumber}/{data.length} Tasks
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
              <ProjectTag project={projects} />
              <TodoSolar solar={solar} />
            </IonCol>
          </IonRow>
        </IonGrid>
        {/*
          mapping all subtasks
        */}
        {data.map((subTask, i) => {
          return (
            <TodoSubtask
              subtask={subTask.data().subTask}
              checked={subTask.data().checked}
              parentId={id}
              id={subTask.id}
            />
          );
        })}
        <TodoAddSubtask parentId={id} />
      </div>
    </div>
  );
};

export default TodoCard;
