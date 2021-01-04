/* -----
Imports
----- */

// React and Ionic
import { IonButton, IonContent, IonPage, IonRouterOutlet } from "@ionic/react";
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
/* React */
import React from "react";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
/* Welcome design */
import "../../design/Login/welcome.scss";
/* Global Theme */
import "../../theme/variables.scss";
import Login from "./Login";
import Register from "./Register";
import Button from "@material-ui/core/Button";

/* -----
  Welcome.tsx
----- */

const Welcome: React.FC = () => {
  let history = useHistory();
  /* return */
  return (
    <IonPage>
      <IonReactRouter>
        <IonContent>
          {/*
            Router for login/register navigation
            */}

          <div className="welcome-background">
            <div className="welcome-wrapper">
              <p className="welcome-message">Welcome to Rocketivity</p>
              <Button
                id="welcome-login-button"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Sign in
              </Button>
              <Button
                id="welcome-register-button"
                onClick={() => {
                  history.push("/register");
                }}
              >
                Sign up
              </Button>
            </div>
          </div>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Welcome;
