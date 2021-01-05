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
  IonRow
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
/* remindme design */
import "../../design/RemindMe/remindme.scss";
/* Global Theme */
import "../../theme/variables.scss";
// Pages
import RemindMe_Day from "./RemindMe_Day";
import RemindMe_Month from "./RemindMe_Month";
import RemindMe_Week from "./RemindMe_Week";






/* -----
RemindMe.tsx
----- */

const RemindMe: React.FC = () => {
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
                path="/remindme/day"
                render={() => <RemindMe_Day />}
              />
              <Route
                exact
                path="/remindme/week"
                render={() => <RemindMe_Week />}
              />
              <Route
                exact
                path="/remindme/month"
                render={() => <RemindMe_Month />}
              />
              <Route>
                <Redirect to="/remindme/day" />
              </Route>
            </Switch>
          </IonRouterOutlet>

          {/*
            Top navigation bar
          */}
          <div className="remindme-grid-wrapper">
            <IonGrid class="remindme-grid">
              <IonRow class="remindme-tab">
                {/*
                  Tab for day
                */}
                <IonCol size="4" class="remindme-tab-col">
                  <Link
                    to="/remindme/day"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Day")}
                  >
                    <p
                      className={
                        selected === "Day"
                          ? "remindme-tab-text-selected"
                          : "remindme-tab-text"
                      }
                    >
                      Day
                    </p>
                    <div
                      className={
                        selected === "Day"
                          ? "remindme-tab-underline-selected"
                          : "remindme-tab-underline"
                      }
                      style={{ borderRadius: "20px 0px 0px 20px" }}
                    />
                  </Link>
                </IonCol>
                {/*
                  Tab for Week
                */}
                <IonCol size="4" class="remindme-tab-col">
                  <Link
                    to="/remindme/week"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Week")}
                  >
                    <p
                      className={
                        selected === "Week"
                          ? "remindme-tab-text-selected"
                          : "remindme-tab-text"
                      }
                    >
                      Week
                    </p>
                    <div
                      className={
                        selected === "Week"
                          ? "remindme-tab-underline-selected"
                          : "remindme-tab-underline"
                      }
                    />
                  </Link>
                </IonCol>

                {/*
                  Tab for Month
                */}
                <IonCol size="4" class="remindme-tab-col">
                  <Link
                    to="/remindme/month"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Month")}
                  >
                    <p
                      className={
                        selected === "Month"
                          ? "remindme-tab-text-selected"
                          : "remindme-tab-text"
                      }
                    >
                      Month
                    </p>
                    <div
                      className={
                        selected === "Month"
                          ? "remindme-tab-underline-selected"
                          : "remindme-tab-underline"
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

export default RemindMe;
