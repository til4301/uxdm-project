/* -----
Imports
----- */

// React and Ionic
import { IonContent, IonPage, IonRouterOutlet } from "@ionic/react";
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
import { Redirect, Route, Switch, Link } from "react-router-dom";
/* Login design */
import "../../design/Login/login.scss";
/* Global Theme */
import "../../theme/variables.scss";
import { Icon, InlineIcon } from "@iconify/react";
import outlineArrowBack from "@iconify-icons/ic/outline-arrow-back";
import { db } from "../../firebase";

/* -----
  Login.tsx
----- */

const Login = ({setIsLoggedIn}) => {
  /* functions */
  const handleSubmit = () => {
    if (username !== "" || password !== "") {
      db.collection("user")
        .where("username", "==", username)
        .get()
        .then((result) => {
          if (result.empty) {
            setError(true);
          } else if (result.docs.length > 1) {
            setError(true);
            console.log("Data corrupted");
          } else {
            db.collection("user")
              .doc(result.docs[0].id)
              .onSnapshot((result) => {
                if (password === result.data().password) {
                  setIsLoggedIn(true);
                } else {
                  console.log("User data wrong");
                  setError(true);
                }
              });
            //setIsLoggedIn(true);
          }
        });
    } else {
      setError(true);
    }
  };
  /* states */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  /* return */
  return (
    <IonPage>
      <IonContent>
        <div className="login-background">
          <div className="login-wrapper">
            <div className="login-back">
              <Link to="/welcome" style={{ textDecoration: "none" }}>
                <Icon icon={outlineArrowBack} className="login-back-icon" />
              </Link>
            </div>
            <p className="login-message">Welcome back!</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="login-form"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="login-form"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <p className={error ? "login-error" : "login-noerror"}>
              {" "}
              Your login data was not correct. Please try again.{" "}
            </p>
            <Button id="login-button" onClick={handleSubmit}>
              Sign in
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
