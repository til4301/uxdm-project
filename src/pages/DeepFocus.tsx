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
  timer,
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
  IonProgressBar,
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
  const [progress, setProgress] = useState(0.01);
  function touch() {
    setActive(!active);
  }
  // function restart() {
  //   setSec(5);
  //   setMin(5);
  //   setActive(false);
  // }

  /* Here I manage what happens with the timer
when the timer is stopped or the time is 
modificated*/

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> = setInterval(() => "", 1000);
    if (active && sec > 0) {
      interval = setInterval(() => {
        setSec((sec) => sec - 1);
        setProgress(progress + 0.01);
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

  // test functions -- prea and pre
  function pre() {
    setProgress(progress + 10);
  }
  function prea() {
  }
  return (
    <IonPage>
      <IonContent className="deepfocus-background">
        <IonGrid>
          <IonRow>
            <IonCol>Long/ Short session</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="deepfocus-rounded">
              <IonButton
                className="deepfocus-move-session-left"
                onClick={() => setSession(session - 1)}
              >
                <IonIcon icon={removeCircle} />
              </IonButton>
              {session < 0 ? setSession(0) : session}
              <IonButton
                className="deepfocus-move-session-right"
                onClick={() => setSession(session + 1)}
              >
                <IonIcon icon={addCircle} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h2 className="deepfocus-fonts">Sessions</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            {/* <IonCol className="deepfocus-pos-timer">
              <h1>
                {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
              </h1>
            </IonCol> */}
          </IonRow>
          <IonRow>
            <IonCol className="deepfocus-pose">
              <p className="deepfocus-pose">Break time</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput
                onInput={(ev) => setMin(+(ev.target as HTMLInputElement).value)}
                onClick={touch}
                value={min < 10 ? `0${min}:` : min}
                className="deepfocus-move-right"
              ></IonInput>
            </IonCol>
            <IonCol>
              <IonInput
                onInput={(ev) => setSec(+(ev.target as HTMLInputElement).value)}
                onClick={touch}
                value={sec < 10 ? `0${sec}` : sec}
                className="deepfocus-move-left"
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="deepfocus-break">
              <p>Minutes left</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="deepfocus-pos-timer">
              <IonButton
                // className={` button-primary-${active ? "active" : "inactive"}`}
                className="deepfocus-pos-timer"
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
            <IonCol size="2"></IonCol>
            <IonCol justify-content-center>
              <IonProgressBar
                color="primary"
                className="deepfocus-progress"
                value={progress}
              ></IonProgressBar>
            </IonCol>
            <IonCol size="2"></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DeepFocus;
