/* Ionic imports */
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Checkbox } from "@material-ui/core";
import { addCircle, arrowBackOutline } from "ionicons/icons";

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
      <IonContent className="screenlogin-background">
        <div>
          <IonButton className="screenlogin-button-back">
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol className="screenlogin-font-color">
              <p className="screenlogin-font-color">Welcome back !</p>
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
              <IonItem className="screenlogin-item-two">
                <IonLabel> Remember me </IonLabel>
                {/* <IonCheckbox slot="start"> </IonCheckbox> */}
                <Checkbox slot="start" className="prueba"></Checkbox>
              </IonItem>
            </IonCol>
            <IonCol className="screenlogin-label">
              <IonLabel>Forgot Password?</IonLabel>
              {/* <a href="">Forgot Password</a> */}
            </IonCol>
          </IonRow>
          {/* Row for the Sign in button */}
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
