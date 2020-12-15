/* -----
Imports
----- */

// React and Ionic
import React from "react";
import { IonContent, IonPage } from "@ionic/react";

// Pages

/* -----
Design
----- */

/* MyTodo design */
import "../design/mytodo_month.scss";

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
MyTodo.tsx
----- */

const MyTodo_Month: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "60px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1>Month</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyTodo_Month;
