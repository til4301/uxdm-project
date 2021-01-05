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
import { db } from "../../firebase";

/* -----
.ProgressCardAll.tsx
----- */

//Props
interface Props {
  numberSubTasks: number;
  numberCheckedSubTasks: number;
}

//Function
const ProgressCardAll: React.FC<Props> = ({
  numberSubTasks,
  numberCheckedSubTasks,
}) => {
  /* colorVariant counter */
  let progress = ((numberCheckedSubTasks / numberSubTasks) * 100).toString() + "%";

  if (isNaN(numberCheckedSubTasks / numberSubTasks)) {
    progress = "0%";
  }

  return (
    <div className="progress-card">
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="5">
            <p className="progress-card-header">All Tasks</p>
            <p className="progress-card-subheader">
              {numberCheckedSubTasks}/{numberSubTasks} Tasks Done
            </p>
          </IonCol>
          <IonCol size="7" class="progress-card-grid-progressbar">
            <div className={"progress-card-progressbar-" + 7}>
              <div
                className={"progress-card-progressbar-progress-" + 7}
                style={{ width: progress }}
              ></div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ProgressCardAll;
