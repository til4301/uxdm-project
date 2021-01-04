/* -----
Imports
----- */

// React and Ionic
import { IonCol, IonGrid, IonRow } from "@ionic/react";
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
/* -----
Design
----- */
/* MyTodo design */
import "../../design/Progress/progresscard.scss";
/* Global Theme */
import "../../theme/variables.scss";
// Firebase
import { db } from "../../database/firebase";

/* -----
.ProgressCard.tsx
----- */

//Props
interface Props {
  task: string;
  count: number;
  variant: string;
  parentId: number;
}

//Function
const ProgressCard: React.FC<Props> = ({ task, count, variant, parentId }) => {
  /* states */
  const [numberSubtask, setNumberSubtask] = useState(0);
  const [checkedNumber, setCheckedNumber] = useState(0);

  /* Databse functions when component mounts */
  useEffect(() => {
    // Fetching all subtasks of parent
    db.collection("subtask")
      .where("parentId", "==", parentId)
      .onSnapshot((snapshot) => {
        let tempArray: any = [];
        snapshot.forEach((item) => {
          tempArray.push(item);
        });
        setNumberSubtask(tempArray.length);
      });

    // Fetching number of checked subtasks
    db.collection("subtask")
      .where("parentId", "==", parentId)
      .where("checked", "==", true)
      .onSnapshot((snapshot) => {
        let tempArray: any = [];
        snapshot.forEach((item) => {
          tempArray.push(item);
        });
        setCheckedNumber(tempArray.length);
      });
  }, []);

  /* colorVariant counter */
  let colorVariant = count % 7;
  let progress = ((checkedNumber / numberSubtask) * 100).toString() + "%";

  if (colorVariant === 0) {
    colorVariant = 7;
  }

  if (isNaN(checkedNumber / numberSubtask)) {
    progress = "0%";
  }

  return (
    <div className="progress-card">
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="5">
            <p className="progress-card-header">{task}</p>
            <p className="progress-card-subheader">
              {checkedNumber}/{numberSubtask} Tasks Done
            </p>
          </IonCol>
          <IonCol size="7" class="progress-card-grid-progressbar">
            <div className={"progress-card-progressbar-" + colorVariant}>
              <div
                className={"progress-card-progressbar-progress-" + colorVariant}
                style={{ width: progress }}
              ></div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ProgressCard;
