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
import React from "react";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/Progress/progresscard.scss";
/* Global Theme */
import "../../theme/variables.scss";






/* -----
.ProgressCard.tsx
----- */

//Props
interface Props {
  task: string;
  count: number;
  numberSubTasks: number;
  numberCheckedSubTasks: number;
  variant: string;
}

//Function
const ProgressCard: React.FC<Props> = ({
  task,
  count,
  numberSubTasks,
  numberCheckedSubTasks,
  variant,
}) => {
  /* colorVariant counter */
  let colorVariant = count % 7;
  let progress =
    ((numberCheckedSubTasks / numberSubTasks) * 100).toString() + "%";

  if (colorVariant === 0) {
    colorVariant = 7;
  }

  if (isNaN(numberCheckedSubTasks / numberSubTasks)) {
    progress = "0%";
  }

  return (
    <div className="progress-card">
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="5">
            <p className="progress-card-header">{task}</p>
            <p className="progress-card-subheader">
              {numberCheckedSubTasks}/{numberSubTasks} Tasks Done
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
