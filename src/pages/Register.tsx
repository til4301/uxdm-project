import {
  IonApp,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import React from "react";
import "../design/register.scss";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="register-background">
        <div>
          <p className="register-message">Welcome aboard ! </p>
        </div>
        <div>
          <IonItem className="register-item">
            <IonLabel position="floating">Your email</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </div>
        <div>
          <IonItem className="register-item">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </div>
        <div>
          <IonItem className="register-item">
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </div>
        <div className="register-button-des">
          <IonButton
            className="register-button-des"
            fill="solid"
            expand="block"
          >
            Sign up
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
