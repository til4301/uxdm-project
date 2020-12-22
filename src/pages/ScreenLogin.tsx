/* Ionic imports */
import {
  IonButton,
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
/* ScreenLogin design */
import "../design/screenlogin.scss";

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
      changeLogin(true);
      history.push("/mytodo");
    } else {
      alert("Your login data was not correct. Please try again.");
    }
  };

  return (
    <IonPage>
      <IonContent className="screenlogin-background">
        <IonGrid>
          <IonRow>
            <IonCol className="screenlogin-font-color">
              <h4>Welcome back!</h4>
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
            <IonCol className="screenlogin-col-button">
              <IonButton
                onClick={handleLogin}
                expand="block"
                fill="solid"
                class="screenlogin-button-des"
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
