/* -----
Imports
----- */

// React and Ionic
import { IonButton } from "@ionic/react";
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
// Material UI
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//  Luxon
import { DateTime } from "luxon";
import React, { useState } from "react";
/* AddTaskDialog design */
import "../../design/AddTask/addtasksuccess.scss";
// Firebase
import { db } from "../../database/firebase";
// Resources
import addTaskIcon from "../../resources/addTask_icon.svg";
import selectDateIcon from "../../resources/selectDate_icon.svg";
import selectGroupIcon from "../../resources/selectGroup_icon.svg";
import solarMoonIconDisabled from "../../resources/solarMoon-disabled_icon.svg";
import solarMoonIcon from "../../resources/solarMoon_icon.svg";
import solarPlanetIconDisabled from "../../resources/solarPlanet-disabled_icon.svg";
import solarPlanetIcon from "../../resources/solarPlanet_icon.svg";
import solarStarIconDisabled from "../../resources/solarStar-disabled_icon.svg";
import solarStarIcon from "../../resources/solarStar_icon.svg";
/* Global Theme */
import "../../theme/variables.scss";
// Components
import AddTodoSelectDate from "./AddTodoSelectDate";
import AddTodoSelectProject from "./AddTodoSelectProject";
import AddTodoSelectTaskName from "./AddTodoSelectTaskName";
import congratPic from "../../resources/congrats.png";

/* -----
AddTaskSuccess.tsx
----- */

// Props
interface Props {
  showSuccess: boolean;
  setShowSuccess: Function;
}
//Function
const AddTaskSuccess: React.FC<Props> = ({ showSuccess, setShowSuccess }) => {
  /* states */

  /* return */
  return (
    <div>
      {/*
      Dialog for adding task
      */}
      <Dialog
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
        }}
        id="addtasksuccess-dialog"
        PaperProps={{
          style: {
            background:
              "linear-gradient(0deg,rgba(6, 7, 19, 1) 0%,rgba(23, 29, 77, 1) 100%)",
            boxShadow:
              "0px 0px 3px rgba(0, 255, 226, 0.5), 0px 0px 12px rgba(0, 255, 226, 0.5), 0px 0px 22px rgba(0, 255, 226, 0.2)",
            borderRadius: "24px",
            padding: "20px",
          },
        }}
      >
        <DialogContent>
          <div className="addtasksuccess-dialog-wrapper">
            <p className="addtasksuccess-dialog-header">Congrats!</p>
            <img src={congratPic} alt="Congrats!" className="addtasksuccess-dialog-pic"/>
            <p className="addtasksuccess-dialog-subtext">
              You have successfully added the new task!
            </p>
          </div>
        </DialogContent>

        {/* 
          Dialog Interaction with Add Task and Cancel Button 
        */}
        <DialogActions style={{ margin: "auto" }}>
          <IonButton
            class="addtasksuccess-dialog-button"
            onClick={()=>setShowSuccess(false)}
          >
            Okay
          </IonButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTaskSuccess;
