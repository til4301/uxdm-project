/* -----
Imports
----- */

// React and Ionic
import React, { useEffect, useState } from "react";
import {
  addCircle,
  pauseCircleOutline,
  pauseOutline,
  playSharp,
  removeCircle,
  removeCircleOutline,
} from "ionicons/icons";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// Pages

/* -----
Design
----- */

/* Core CSS for Ionic */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS for Ionic */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Global Theme */
import "../theme/variables.scss";
/* Local Theme */
import "../design/deepfocus.scss";
/* -----
DeepFocus.tsx
----- */

const DeepFocus: React.FC = () => {
  const [sec, setSec] = useState(5);
  const [min, setMin] = useState(5);
  const [active, setActive] = useState(false);
  const [session, setSession] = useState(3);

  function touch() {
    setActive(!active);
    console.log(sec + " entre");
  }
  // function restart() {
  //   setSec(5);
  //   setMin(5);
  //   setActive(false);
  // }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> = setInterval(() => "", 1000);
    if (active && sec > 0) {
      interval = setInterval(() => {
        setSec((sec) => sec - 1);
      }, 1000);
    } else if (!active && sec !== 0) {
      clearInterval(interval);
    }
    if (sec === 0) {
      if (min === 0) {
        clearInterval(interval);
      } else {
        setMin((min) => min - 1);
        setSec(59);
      }
    }
    return () => clearInterval(interval);
  }, [active, sec]);

  function pre() {
    console.log("im Betrieb");
  }
  function prea() {
    console.log("im anderen Betrieb");
  }
  return (
    <IonPage className="drea">
      <IonContent>
        <div>
          <h3 className="rounded">Break time</h3>
        </div>
        <div>
          <h3 className="rounded">
            <IonButton onClick={() => setSession(session - 1)}>
              <IonIcon icon={removeCircle} />
            </IonButton>
            Sessions: {session < 0 ? setSession(0) : session}
            <IonButton onClick={() => setSession(session + 1)}>
              <IonIcon icon={addCircle} />
            </IonButton>
          </h3>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol className="pos-timer">
              <h1>
                {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
              </h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput
                onInput={(ev) => setMin(+(ev.target as HTMLInputElement).value)}
                onClick={touch}
                value={min < 10 ? `0${min}` : min}
                className="move-right"
              ></IonInput>
            </IonCol>
            <IonCol>
              <IonInput
                onInput={(ev) => setSec(+(ev.target as HTMLInputElement).value)}
                onClick={touch}
                type="number"
                value={sec < 10 ? `0${sec}` : sec}
                className="move-left"
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="pos-timer">
              <IonButton
                className={` button-primary-${active ? "active" : "inactive"}`}
                onClick={touch}
              >
                {active ? (
                  <IonIcon icon={pauseOutline} />
                ) : (
                  <IonIcon icon={playSharp} />
                )}
              </IonButton>
              {/* <IonCol>
                <IonButton className="rounded" onClick={restart}>
                  restart
                </IonButton>
              </IonCol> */}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput onInput={pre} onClick={prea}></IonInput>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DeepFocus;
