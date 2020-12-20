/* -----
Imports
----- */

/* React and Ionic */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
import "./design/app.scss";

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
import ScreenLogin from "./pages/ScreenLogin";

/* -----
App.tsx
----- */

const App: React.FC = () => {
  /* States */
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  /* Handle methdods */
  const handleLogin = (value: boolean) => {
    setIsLoggedIn(value);
  };

  /* return */
  if (isLoggedIn) {
    return (
      <IonApp>
        <IonReactRouter>
          <IonContent>
            <IonTabs>
              {/* 
        //* Ionic router
        Here are the routes for the TabBar at the bottom defined
        At the end a redirect for the root path is defined
              */}
              <IonRouterOutlet>
                <Switch>
                  <Route exact path="/mytodo" render={() => <MyTodo />} />
                  <Route exact path="/deepfocus" render={() => <DeepFocus />} />
                  <Route exact path="/progress" render={() => <Progress />} />
                  <Route exact path="/remindme" render={() => <RemindMe />} />
                  <Route exact path="/solar" render={() => <SolarSystem />} />
                  <Route exact path="/">
                    <Redirect to="/mytodo" />
                  </Route>
                </Switch>
              </IonRouterOutlet>

              <IonTabBar slot="bottom" style={{}}>
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
  } else {
    return (
      <IonApp>
        <IonReactRouter>
          <IonContent>
            <IonRouterOutlet>
              <Route render={() => <ScreenLogin changeLogin={handleLogin} />} />
            </IonRouterOutlet>
          </IonContent>
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;
