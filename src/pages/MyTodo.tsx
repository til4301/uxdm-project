/* -----
Imports
----- */

// React and Ionic
import React from "react";
import { Route } from "react-router";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// Pages

/* -----
Design
----- */

/* MyTodo design */
import "../design/mytodo.scss";

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
import { Link } from "react-router-dom";

/* -----
MyTodo.tsx
----- */

const MyTodo: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/** Grid layout for top menu **/}
        <IonGrid class="mytodo-grid">
          <IonRow class="mytodo-tab">
            {/** Grid column for day **/}
            <IonCol size="4" class="mytodo-tab-col">
              <p className="mytodo-tab-text-selected">Day</p>
              <div
                className="mytodo-tab-underline-selected"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              />
            </IonCol>
            {/** Grid column for week **/}
            <IonCol size="4" class="mytodo-tab-col">
              <p className="mytodo-tab-text">Week</p>
              <div className="mytodo-tab-underline" />
            </IonCol>
            {/** Grid column for month **/}
            <IonCol size="4" class="mytodo-tab-col">
              <p className="mytodo-tab-text">Month</p>
              <div
                className="mytodo-tab-underline"
                style={{ borderRadius: "0px 20px 20px 0px" }}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MyTodo;
