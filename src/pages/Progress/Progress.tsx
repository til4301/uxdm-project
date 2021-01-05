/* -----
Imports
----- */

// React and Ionic
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRouterOutlet,
  IonRow,
} from "@ionic/react";
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
import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
/* -----
Design
----- */
/* Progress design */
import "../../design/Progress/progress.scss";
/* Global Theme */
import "../../theme/variables.scss";
// Pages
import Progress_Day from "./Progress_Day";
import Progress_Month from "./Progress_Month";
import Progress_Week from "./Progress_Week";

/* -----
Progress.tsx
----- */

const Progress: React.FC = () => {
  /* states */
  const [selected, setSelected] = useState("Day");

  /* return */
  return (
    <IonPage>
      <IonReactRouter>
        <IonContent>
          {/*
          Router for top navigation
          */}
          <IonRouterOutlet>
            <Switch>
              <Route
                exact
                path="/progress/day"
                render={() => <Progress_Day />}
              />
              <Route
                exact
                path="/progress/week"
                render={() => <Progress_Week />}
              />
              <Route
                exact
                path="/progress/month"
                render={() => <Progress_Month />}
              />
              <Route>
                <Redirect to="/progress/day" />
              </Route>
            </Switch>
          </IonRouterOutlet>

          {/*
            Top navigation bar
          */}
          <div className="progress-grid-wrapper">
            <IonGrid class="progress-grid">
              <IonRow class="progress-tab">
                {/*
                  Tab for day
                */}
                <IonCol size="4" class="progress-tab-col">
                  <Link
                    to="/progress/day"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Day")}
                  >
                    <p
                      className={
                        selected === "Day"
                          ? "progress-tab-text-selected"
                          : "progress-tab-text"
                      }
                    >
                      Day
                    </p>
                    <div
                      className={
                        selected === "Day"
                          ? "progress-tab-underline-selected"
                          : "progress-tab-underline"
                      }
                      style={{ borderRadius: "20px 0px 0px 20px" }}
                    />
                  </Link>
                </IonCol>
                {/*
                  Tab for Week
                */}
                <IonCol size="4" class="progress-tab-col">
                  <Link
                    to="/progress/week"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Week")}
                  >
                    <p
                      className={
                        selected === "Week"
                          ? "progress-tab-text-selected"
                          : "progress-tab-text"
                      }
                    >
                      Week
                    </p>
                    <div
                      className={
                        selected === "Week"
                          ? "progress-tab-underline-selected"
                          : "progress-tab-underline"
                      }
                    />
                  </Link>
                </IonCol>

                {/*
                  Tab for Month
                */}
                <IonCol size="4" class="progress-tab-col">
                  <Link
                    to="/progress/month"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Month")}
                  >
                    <p
                      className={
                        selected === "Month"
                          ? "progress-tab-text-selected"
                          : "progress-tab-text"
                      }
                    >
                      Month
                    </p>
                    <div
                      className={
                        selected === "Month"
                          ? "progress-tab-underline-selected"
                          : "progress-tab-underline"
                      }
                      style={{ borderRadius: "0px 20px 20px 0px" }}
                    />
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Progress;
