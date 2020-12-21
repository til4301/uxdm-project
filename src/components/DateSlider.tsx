/* -----
Imports
----- */

// React and Ionic
import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronForward, chevronBack } from "ionicons/icons";

// Luxon
import { DateTime } from "luxon";

/* ----- 
Design
----- */

/* Dateslider design */
import "../design/dateslider.scss";

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

/* -----
DateSlider.tsx
----- */

interface Props {
  dateSlide: string;
  setDateSlide: Function;
  variant: string;
}

const DateSlider: React.FC<Props> = ({ dateSlide, setDateSlide, variant }) => {
  //* Day DateSlider *//
  if (variant === "day") {
    return (
      <div className="dateslider-dateslider-wrapper">
        <div className="dateslider-dateslider-arrow">
          <IonIcon
            icon={chevronBack}
            class="dateslider-dateslider-arrow-icon"
            onClick={() => {
              setDateSlide(
                DateTime.fromISO(dateSlide).minus({ days: 1 }).toISODate()
              );
            }}
          />
        </div>

        <div className="dateslider-dateslider-box">
          <p className="dateslider-dateslider-box-text">Day of &nbsp;</p>
          <p className="dateslider-dateslider-box-text-bold">
            {DateTime.fromISO(dateSlide).toFormat("ccc") +
              ", " +
              DateTime.fromISO(dateSlide).toFormat("LLL") +
              " " +
              DateTime.fromISO(dateSlide).toFormat("dd")}
          </p>
        </div>

        <div className="dateslider-dateslider-arrow">
          <IonIcon
            icon={chevronForward}
            class="dateslider-dateslider-arrow-icon"
            onClick={() => {
              setDateSlide(
                DateTime.fromISO(dateSlide).plus({ days: 1 }).toISODate()
              );
            }}
          />
        </div>
      </div>
    );
  }

  //* Week DateSlider *//
  else if (variant === "week") {
    return (
      <div className="dateslider-dateslider-wrapper">
        <div className="dateslider-dateslider-arrow">
          <IonIcon
            icon={chevronBack}
            class="dateslider-dateslider-arrow-icon"
            onClick={() => {
              setDateSlide(
                DateTime.fromISO(dateSlide).minus({ weeks: 1 }).toISODate()
              );
            }}
          />
        </div>

        <div className="dateslider-dateslider-box">
          <p className="dateslider-dateslider-box-text">Week of &nbsp;</p>
          <p className="dateslider-dateslider-box-text-bold">
            {DateTime.fromISO(dateSlide).toFormat("ccc") +
              ", " +
              DateTime.fromISO(dateSlide).toFormat("LLL") +
              " " +
              DateTime.fromISO(dateSlide).toFormat("dd")}
          </p>
        </div>

        <div className="dateslider-dateslider-arrow">
          <IonIcon
            icon={chevronForward}
            class="dateslider-dateslider-arrow-icon"
            onClick={() => {
              setDateSlide(
                DateTime.fromISO(dateSlide).plus({ weeks: 1 }).toISODate()
              );
            }}
          />
        </div>
      </div>
    );
  }

  //* Month DateSlider *//
  else if (variant === "month") {
    return (
      <div className="dateslider-dateslider-wrapper">
        <div className="dateslider-dateslider-arrow">
          <IonIcon
            icon={chevronBack}
            class="dateslider-dateslider-arrow-icon"
            onClick={() => {
              setDateSlide(
                DateTime.fromISO(dateSlide).minus({ month: 1 }).toISODate()
              );
            }}
          />
        </div>

        <div className="dateslider-dateslider-box">
          <p className="dateslider-dateslider-box-text-bold">
            {DateTime.fromISO(dateSlide).toFormat("LLLL")}
          </p>
          <p className="dateslider-dateslider-box-text">
            &nbsp; of {DateTime.fromISO(dateSlide).toFormat("y")}
          </p>
        </div>

        <div className="dateslider-dateslider-arrow">
          <IonIcon
            icon={chevronForward}
            class="dateslider-dateslider-arrow-icon"
            onClick={() => {
              setDateSlide(
                DateTime.fromISO(dateSlide).plus({ month: 1 }).toISODate()
              );
            }}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DateSlider;
