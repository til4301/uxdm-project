/* -----
Imports
----- */

// React and Ionic
import { IonContent, IonIcon, IonPage, IonRouterOutlet } from "@ionic/react";
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
import { Button } from "@material-ui/core";
/* React */
import React, { useState } from "react";
import { Redirect, Route, Switch, Link, useHistory } from "react-router-dom";
/* Register design */
import "../../design/Login/register.scss";
/* Global Theme */
import "../../theme/variables.scss";
import { Icon, InlineIcon } from "@iconify/react";
import outlineArrowBack from "@iconify-icons/ic/outline-arrow-back";
import { db } from "../../database/firebase";

/* -----
  Register.tsx
----- */

const Register: React.FC = () => {
  /* variables */
  let history = useHistory();
  /* functions */
  const handleSubmit = () => {
    if (username !== "" || password !== confirmPassword) {
      db.collection("user")
        .where("username", "==", username)
        .get()
        .then((result) => {
          if (result.empty) {
            db.collection("user").doc().set({
              username: username,
              password: password,
            });
            history.push("/success");
          } else {
            setError(true);
            console.log("User already exists")
          }
        });
    } else {
      setError(true);
      console.log("Password not ident or username empty")
    }
  };

  /* states */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  /* return */
  return (
    <IonPage>
      <IonContent>
        <div className="register-background">
          <div className="register-wrapper">
            <div className="register-back">
              <Link to="/welcome" style={{ textDecoration: "none" }}>
                <Icon icon={outlineArrowBack} className="register-back-icon" />
              </Link>
            </div>
            <p className="register-message">Welcome aboard!</p>

            <form>
              <input
                type="text"
                className="register-form"
                placeholder="Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="register-form"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="register-form"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </form>
            <p className={error ? "register-error" : "register-noerror"}>
              The username is invalid or the passwords do not match. Please try
              again.
            </p>

            <Button id="register-button" onClick={handleSubmit}>
              Sign up
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
