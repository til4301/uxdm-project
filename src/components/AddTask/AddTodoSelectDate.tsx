/* -----
Imports
----- */

// React and Ionic
import { IonAlert } from "@ionic/react";
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
// Luxon
import { DateTime } from "luxon";
import React from "react";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/AddTask/addtodoalert.scss";
/* Global Theme */
import "../../theme/variables.scss";






/* -----
AddTodoSelectDate.tsx
----- */

//Props
interface Props {
  showSelectDate: boolean;
  setShowSelectDate: Function;
  setShowAddTask: Function;
  setSelectedDate: Function;
}

//Function
const AddTodoSelectDate: React.FC<Props> = ({
  showSelectDate,
  setShowSelectDate,
  setShowAddTask,
  setSelectedDate,
}) => {
  /* variables */
  const min = "2000-01-01"; //minimum for selected date
  const max = "2049-12-31"; //maximum for selected date

  /* return */
  return (
    <IonAlert
      isOpen={showSelectDate}
      onDidDismiss={() => {
        setShowAddTask(true);
        setShowSelectDate(false);
      }}
      cssClass="selectDate-alert"
      header={"Date & Time"}
      subHeader={"Please select a valid date and time."}
      inputs={[
        // input date with min & max
        {
          name: "SelectDate",
          type: "datetime-local",
        },
      ]}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Ok",
          //checking if date is between min and max
          handler: (alertData) => {
            if (
              DateTime.fromISO(min) < DateTime.fromISO(alertData.SelectDate) &&
              DateTime.fromISO(max) > DateTime.fromISO(alertData.SelectDate)
            ) {
              setSelectedDate(alertData.SelectDate);
            }
          },
        },
      ]}
    />
  );
};

export default AddTodoSelectDate;
