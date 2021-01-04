/* -----
Imports
----- */

// React and Ionic
import { IonCol, IonGrid, IonRow, IonToggle } from "@ionic/react";
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
// Luxon
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
// Components
/* -----
Design
----- */
/* MyTodo design */
import "../../design/RemindMe/remindmecard.scss";
/* Global Theme */
import "../../theme/variables.scss";

// Firebase
import { db } from "../../database/firebase";

/* -----
.RemindMeCard.tsx
----- */

//Props
interface Props {
  task: string;
  id: string;
  date: string;
  isActive: boolean;
}

//Function
const RemindMeCard: React.FC<Props> = ({ task, id, date, isActive }) => {
  /* states */
  const [isOn, setIsOn] = useState(isActive);

  /* useEffect */
  useEffect(() => {
    db.collection("todo")
      .doc(id)
      .update({ reminder: isOn });
  }, [isOn]);

  return (
    <div className="remindme-card">
      <IonGrid>
        <IonRow style={{ display: "flex", alignItems: "center" }}>
          <IonCol size="1" />
          <IonCol size="7">
            <p className="remindme-card-header">{task}</p>
            <p className="remindme-card-subheader">
              {DateTime.fromISO(date).toFormat("LLL") +
                " " +
                DateTime.fromISO(date).toFormat("d") +
                ", " +
                DateTime.fromISO(date).toFormat("T")}
            </p>
          </IonCol>
          <IonCol size="4" class="remindme-card-grid-toggle">
            <IonToggle
              checked={isOn}
              onIonChange={(e) => setIsOn(e.detail.checked)}
              class="remindme-card-toggle"
            />
            <p className="remindme-card-active">{isOn ? "On" : "Off"}</p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default RemindMeCard;
