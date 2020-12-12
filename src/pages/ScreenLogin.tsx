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
import React, { useState } from "react";
import App from "../App";

/* ScreenLogin design */
import "../design/screenlogin.scss";

const ScreenLogin: React.FC = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  // with this function I verify if the values of the inputs were updated correctly
  const login = () => {
    if (user == "Kevin" && pass == "Diaz") {
      console.log("bien");
      // this was a try to redirect the user to the main menu when the user and password were 'correct'
      return <App />;
    } else {
      alert("Incorrect data");
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
              <IonItem>
                <h5 className="move-left">Remember me</h5>
                <IonCheckbox mode="md" slot="start" />
              </IonItem>
            </IonCol>
            <IonCol>
              {/* I have to change this as a link  */}
              <h5 className="move-right"> Forgot password?</h5>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                onClick={login}
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
