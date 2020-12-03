/* -----
Imports
----- */

/* React and Ionic */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Pages */
import DeepFocus from "./pages/DeepFocus";
import MyTodo from "./pages/MyTodo";
import Progress from "./pages/Progress";
import RemindMe from "./pages/RemindMe";
import SolarSystem from "./pages/SolarSystem";

/* -----
Design
----- */

/* App design */
import "./design/app.scss"

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
import "./theme/variables.scss";

/* -----
App.tsx
----- */

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonContent>
        <IonTabs >
          {/* 
            //* Ionic router
            Here are the routes for the TabBar at the bottom defined
            At the end a redirect for the root path is defined
          */}

          <IonRouterOutlet>
            <Route path="/mytodo" component={MyTodo} exact/>
            <Route path="/mytodo/day" component={MyTodo} exact/>
            <Route path="/mytodo/week" component={MyTodo} exact/>
            <Route path="/mytodo/month" component={MyTodo} exact/>


            <Route path="/deepfocus" component={DeepFocus} exact />
            <Route path="/progress" component={Progress} exact />
            <Route path="/remindme" component={RemindMe} exact />
            <Route path="/solarsystem" component={SolarSystem} exact />
            <Redirect exact from="/" to="/mytodo" />
          </IonRouterOutlet>

          {/*
            //* Ionic TabBar
            This is the permanent menu at the bottom of the app
          */}

          <IonTabBar slot="bottom">
            <IonTabButton tab="mytodo" href="/mytodo">
              <IonLabel>My ToDo</IonLabel>
            </IonTabButton>
            <IonTabButton tab="deepfocus" href="/deepfocus">
              <IonLabel>Deep Focus</IonLabel>
            </IonTabButton>
            <IonTabButton tab="progress" href="/progress">
              <IonLabel>Progress</IonLabel>
            </IonTabButton>
            <IonTabButton tab="remindme" href="/remindme">
              <IonLabel>Remind Me</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonReactRouter>
  </IonApp>
);

export default App;
