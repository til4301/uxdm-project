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

/* MyTodo design */
import "../design/mytodo_day.scss";

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
    dateSlide: string,
    setDateSlide: Function,
}

const DateSlider: React.FC<Props> = ({dateSlide, setDateSlide}) => {
  /* variables */
  var date = DateTime.local();

  /* useEffect */
  useEffect(() => {
    setDateSlide(date.toISODate());
  }, []);

  /* return */
  return (
    <div className="mytodo_day-dateslider-wrapper">
      <div className="mytodo_day-dateslider-arrow">
        <IonIcon
          icon={chevronBack}
          class="mytodo_day-dateslider-arrow-icon"
          onClick={() => {
            setDateSlide(
              DateTime.fromISO(dateSlide).minus({ days: 1 }).toISODate()
            );
          }}
        />
      </div>

      <div className="mytodo_day-dateslider-box">
        <p className="mytodo_day-dateslider-box-text">Day from &nbsp;</p>
        <p className="mytodo_day-dateslider-box-text-bold">
          {DateTime.fromISO(dateSlide).toFormat("ccc") +
            ", " +
            DateTime.fromISO(dateSlide).toFormat("LLL") +
            " " +
            DateTime.fromISO(dateSlide).toFormat("dd")}
        </p>
      </div>

      <div className="mytodo_day-dateslider-arrow">
        <IonIcon
          icon={chevronForward}
          class="mytodo_day-dateslider-arrow-icon"
          onClick={() => {
            setDateSlide(
              DateTime.fromISO(dateSlide).plus({ days: 1 }).toISODate()
            );
          }}
        />
      </div>
    </div>
  );
};

export default DateSlider;
