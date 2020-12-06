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
import React from "react";

/* ScreenLogin design */
import "../design/screenlogin.scss";

const ScreenLogin: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1> here comes the Logo.jpg</h1>
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
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="screenlogin-item">
                <IonLabel position="floating">Passwort</IonLabel>
                <IonInput type="password"></IonInput>
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
              <h5 className="move-right"> Forgot password?</h5>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" fill="solid" className="button-des">
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
