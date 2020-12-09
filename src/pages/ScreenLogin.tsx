/* Ionic imports */
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";

/* React imports */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/* Component import */
import App from "../App";

/* ScreenLogin design */
import "../design/screenlogin.scss";
import MyTodo from "./MyTodo";

/* Props */
interface LoginProps {
  changeLogin: Function;
}

/* ScreenLogin component */
const ScreenLogin: React.FC<LoginProps> = ({ changeLogin }) => {
  /* states */
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();


  // with this function I verify if the values of the inputs were updated correctly
  const handleLogin = () => {
    if (user == "Kevin" && pass == "Diaz") {
      console.log("bien");
      changeLogin(true);
      history.push("/mytodo");

    } else {
      alert("Your login data was not correct. Please try again.");
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1> Logo.jpg </h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="font-color">
              <h3>Welcome back!</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="screenlogin-item">
                <IonLabel position="floating">User name</IonLabel>
                <IonInput
                  onInput={(ev) =>
                    setUser((ev.target as HTMLInputElement).value)
                  }
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="screenlogin-item">
                <IonLabel position="floating">Passwort</IonLabel>
                <IonInput
                  onInput={(ev) =>
                    setPass((ev.target as HTMLInputElement).value)
                  }
                  type="password"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            
            <IonCol>
              {/* I have to change this as a link  */}
              <h5 className="move-right"> Forgot password?</h5>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                onClick={handleLogin}
                expand="block"
                fill="solid"
                className="button-des"
              >
                Sign in
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ScreenLogin;
