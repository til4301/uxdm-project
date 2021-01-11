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
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
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
  const [sec, setSec] = useState(3);
  const [min, setMin] = useState(6);
  const [active, setActive] = useState(false);
  const [session, setSession] = useState(2);
  const [progress, setProgress] = useState(0.01);
  const [jump, setJump] = useState(0);
  const [b, setB] = useState(3);
  const [showAlert1, setShowAlert1] = useState(false);
  function touch() {
    setActive(!active);
    // document.documentElement.style.setProperty("--andere", "orange");
    //setJump(100 / min);
    console.log("pro " + progress + " " + jump);
  }
  function select() {
    setActive(false);
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
        setProgress(progress + 0.1);
        document.documentElement.style.setProperty(
          "--pos",
          String(progress + "%")
        );
        if (min == 5 && b > 0) {
          setJump(100 / 5);
          console.log("aca 5 " + jump + " " + b);
          setB(b - 1);
        }
        if (min == 4 && b > 0) {
          setJump(100 / 4);
          console.log("aca 5 " + jump + " " + b);
          setB(b - 1);
        }
        if (min == 3 && b > 0) {
          setJump(100 / 3);
          console.log("aca 5 " + jump + " " + b);
          setB(b - 1);
        }
        if (min == 2 && b > 0) {
          setJump(100 / 3);
          console.log("aca 5 " + jump + " " + b);
          setB(b - 1);
        }
        if (min == 1 && b > 0) {
          setJump(100 / 5);
          console.log("aca 5 " + jump + " " + b);
          setB(b - 1);
        }
      }, 1000);
    } else if (!active && sec !== 0) {
      clearInterval(interval);
    }

    if (sec === 0) {
      if (min === 0) {
        setProgress(96);
        document.documentElement.style.setProperty(
          "--pos",
          String(progress + "%")
        );
        setActive(false);

        alert("hola");
        console.log(progress);
        clearInterval(interval);
      } else {
        setMin((min) => min - 1);
        setSec(59);
        setProgress((progress) => progress + jump);
        console.log("resto minuto " + progress + " " + jump);
      }
    }
    return () => clearInterval(interval);
  }, [active, sec]);

  return (
    <IonPage>
      <IonContent className="deepfocus-background">
        <IonGrid>
          <IonRow className="deepfocus-nav">
            {/** Grid column for number of Sessions **/}
            <IonCol size="6" className="deepfocus-nav-col">
              <p className="deepfocus-tab-text-selected">Short session</p>
              <div
                className="deepfocus-tab-underline-selected"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              />
            </IonCol>
            <IonCol size="6" className="deepfocus-nav-col">
              <p className="deepfocus-tab-text-selected">Long Session</p>
              <div
                className="deepfocus-tab-underline"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              />
            </IonCol>
          </IonRow>
          <IonRow style={{ margin: "-5px" }}>
            {/** Grid column for the buttons **/}
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
              <p className="deepfocus-fonts">Sessions</p>
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
            <IonCol size="4"></IonCol>
            <IonCol size="2">
              <IonInput
                onInput={(ev) => setMin(+(ev.target as HTMLInputElement).value)}
                onClick={select}
                value={min < 10 ? `0${min}` : min}
                className="deepfocus-move-right"
              ></IonInput>
            </IonCol>
            <IonCol size="3">
              <IonInput
                onInput={(ev) => setSec(+(ev.target as HTMLInputElement).value)}
                onClick={select}
                value={sec < 10 ? `0${sec}` : sec}
                className="deepfocus-move-left"
              ></IonInput>
            </IonCol>
            <IonCol size="3"></IonCol>
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
                <IonButton className="rounded" onClick={touch}>
                  restart
                </IonButton>
              </IonCol> */}
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="3"></IonCol>
            <IonCol className="tres">
              <div className="ttt">
                {/* <IonItem>
                  <IonLabel>Start Time</IonLabel>
                  <IonDatetime
                    display-format="h:mm A"
                    // picker-format="h:mm A"
                    value="1990-02-19T07:43Z"
                  ></IonDatetime>
                </IonItem> */}
              </div>
            </IonCol>
            <IonCol size="3"></IonCol>
          </IonRow>
          <IonRow style={{ margin: "15px" }}>
            <IonCol size="3" className="deepfocus-progress-div">
              <div
                className="deepfocus-tab-under"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              />
            </IonCol>
            <IonCol size="2" className="deepfocus-progress-div-two">
              <div
                className="deepfocus-tab-under-two"
                style={{ borderRadius: "0px 0px 0px 0px" }}
              />
            </IonCol>
            <IonCol size="2" className="deepfocus-progress-div">
              <div
                className="deepfocus-tab-under"
                style={{ borderRadius: "0px 0px 0px 0px" }}
              />
            </IonCol>
            <IonCol size="2" className="deepfocus-progress-div-two">
              <div
                className="deepfocus-tab-under-two"
                style={{ borderRadius: "0px 0px 0px 0px" }}
              />
            </IonCol>
            <IonCol size="3" className="deepfocus-progress-div">
              <div
                className="deepfocus-tab-under"
                style={{ borderRadius: "0px 20px 20px 0px" }}
              />
            </IonCol>
            <div
              className="deepfocus-ball"
              style={{
                borderRadius: "20px 20px 20px 20px",
                // left: abc + "%",
              }}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DeepFocus;
