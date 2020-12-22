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
/* MyTodo design */
import "../../design/MyTodo/mytodo.scss";
/* Global Theme */
import "../../theme/variables.scss";
// Pages
import MyTodo_Day from "./MyTodo_Day";
import MyTodo_Month from "./MyTodo_Month";
import MyTodo_Week from "./MyTodo_Week";






/* -----
MyTodo.tsx
----- */

const MyTodo: React.FC = () => {
  /* states */
  const [selected, setSelected] = useState("Day");
  const [dateSlide, setDateSlide] = useState("");

  /* return for top navigation*/
  return (
    <IonPage>
      <IonReactRouter>
        <IonContent>
          {/*
          Router for top navigation
          */}
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/mytodo/day" render={() => <MyTodo_Day />} />
              <Route exact path="/mytodo/week" render={() => <MyTodo_Week />} />
              <Route
                exact
                path="/mytodo/month"
                render={() => <MyTodo_Month />}
              />
              <Route>
                <Redirect to="/mytodo/day" />
              </Route>
            </Switch>
          </IonRouterOutlet>
          {/*
            Top navigation bar
          */}
          <div className="mytodo-grid-wrapper">
            <IonGrid class="mytodo-grid">
              <IonRow class="mytodo-tab">
                {/*
                  Tab for day
                */}
                <IonCol size="4" class="mytodo-tab-col">
                  <Link
                    to="/mytodo/day"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Day")}
                  >
                    <p
                      className={
                        selected === "Day"
                          ? "mytodo-tab-text-selected"
                          : "mytodo-tab-text"
                      }
                    >
                      Day
                    </p>
                    <div
                      className={
                        selected === "Day"
                          ? "mytodo-tab-underline-selected"
                          : "mytodo-tab-underline"
                      }
                      style={{ borderRadius: "20px 0px 0px 20px" }}
                    />
                  </Link>
                </IonCol>
                {/*
                  Tab for week
                */}
                <IonCol size="4" class="mytodo-tab-col">
                  <Link
                    to="/mytodo/week"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Week")}
                  >
                    <p
                      className={
                        selected === "Week"
                          ? "mytodo-tab-text-selected"
                          : "mytodo-tab-text"
                      }
                    >
                      Week
                    </p>
                    <div
                      className={
                        selected === "Week"
                          ? "mytodo-tab-underline-selected"
                          : "mytodo-tab-underline"
                      }
                    />
                  </Link>
                </IonCol>
                {/*
                  Tab for month
                */}
                <IonCol size="4" class="mytodo-tab-col">
                  <Link
                    to="/mytodo/month"
                    style={{ textDecoration: "none" }}
                    onClick={() => setSelected("Month")}
                  >
                    <p
                      className={
                        selected === "Month"
                          ? "mytodo-tab-text-selected"
                          : "mytodo-tab-text"
                      }
                    >
                      Month
                    </p>
                    <div
                      className={
                        selected === "Month"
                          ? "mytodo-tab-underline-selected"
                          : "mytodo-tab-underline"
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

export default MyTodo;
