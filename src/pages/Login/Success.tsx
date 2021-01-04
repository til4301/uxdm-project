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
/* success design */
import "../../design/Login/success.scss";
/* Global Theme */
import "../../theme/variables.scss";
import Login from "./Login";
import Register from "./Register";
import Button from "@material-ui/core/Button";

/* -----
  Success.tsx
----- */

const Success: React.FC = () => {
  let history = useHistory();
  /* return */
  return (
    <IonPage>
      <IonReactRouter>
        <IonContent>
          {/*
            Router for login/register navigation
            */}

          <div className="success-background">
            <div className="success-wrapper">
              <p className="success-message">
                Registration was successful! You can now log in with your
                credentials on the login page.
              </p>
              <Button
                id="success-login-button"
                onClick={() => {
                  history.push("/login");
                }}
              >
                To login page
              </Button>
            </div>
          </div>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Success;
