/* -----
Imports
----- */

/* React and Ionic */
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
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
/* App design */
import "./design/app.scss";
import DeepFocus from "./pages/DeepFocus";
/* Pages */
import MyTodo from "./pages/MyTodo/MyTodo";
import Progress from "./pages/Progress/Progress";
import RemindMe from "./pages/RemindMe/RemindMe";
/* Login & Register */
import ScreenLogin from "./pages/Login/ScreenLogin";
/* Global Theme */
import "./theme/variables.scss";
import Welcome from "./pages/Login/Welcome";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Login/Register";
import Success from "./pages/Login/Success";

/* -----
App.tsx
----- */

const App: React.FC = () => {
  /* States */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* return when user is logged in*/
  if (isLoggedIn) {
    return (
      <IonApp>
        <IonReactRouter>
          <IonContent>
            <IonTabs>
              {/* 
                The router for the bottom menu bar
              */}
              <IonRouterOutlet>
                <Switch>
                  <Route exact path="/mytodo" render={() => <MyTodo />} />
                  <Route exact path="/deepfocus" render={() => <DeepFocus />} />
                  <Route exact path="/progress" render={() => <Progress />} />
                  <Route exact path="/remindme" render={() => <RemindMe />} />
                  <Route>
                    <Redirect to="/mytodo" />
                  </Route>
                </Switch>
              </IonRouterOutlet>

              {/* 
                The bottom menu bar
              */}
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
    /* return when user is not logged in*/
    return (
      <IonApp>
        <IonReactRouter>
          <IonContent>
            <IonRouterOutlet>
              <Switch>
                {/* <Route exact path="/welcome" render={() => <Welcome />} /> */}
                <Route
                  exact
                  path="/deepfocus"
                  render={() => <DeepFocus />}
                ></Route>
                <Route
                  exact
                  path="/login"
                  render={() => <Login setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route exact path="/register" render={() => <Register />} />
                <Route exact path="/success" render={() => <Success />} />

                <Route>
                  <Redirect to="/deepfocus" />
                </Route>
              </Switch>
            </IonRouterOutlet>
          </IonContent>
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;
