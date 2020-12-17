/* -----
Imports
----- */

// React and Ionic
import React, { useState } from "react";
import { IonButton } from "@ionic/react";


// Material UI
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

// Components
import AddTodoSelectDate from "../components/AddTodoSelectDate";
import AddTodoSelectTaskName from "../components/AddTodoSelectTaskName";

// Resources
import addTaskIcon from "../resources/addTask_icon.svg";
import selectDateIcon from "../resources/selectDate_icon.svg";
import selectGroupIcon from "../resources/selectGroup_icon.svg";
import solarStarIcon from "../resources/solarStar_icon.svg";
import solarMoonIcon from "../resources/solarMoon_icon.svg";
import solarPlanetIcon from "../resources/solarPlanet_icon.svg";
import solarStarIconDisabled from "../resources/solarStar-disabled_icon.svg";
import solarMoonIconDisabled from "../resources/solarMoon-disabled_icon.svg";
import solarPlanetIconDisabled from "../resources/solarPlanet-disabled_icon.svg";

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
AddTaskDialog.tsx
----- */

interface Props {
  showAddTask: boolean;
  setShowAddTask: Function;
}

const AddTaskDialog: React.FC<Props> = ({ showAddTask, setShowAddTask }) => {
  /* states */

  const [showSelectDate, setShowSelectDate] = useState(false);
  const [showSelectedTaskName, setShowSelectTaskName] = useState(false);

  const [solarSelected, setSolarSelected] = useState("NONE");

  const [selectedTaskName, setSelectedTaskName] = useState("New Task");
  const [selectedDate, setSelectedDate] = useState("2020-12-17");

  /* return */
  return (
    <div>
      <Dialog
        open={showAddTask}
        onClose={() => {
          setShowAddTask(false);
          setSolarSelected("NONE");
        }}
        id="mytodo_day-dialog"
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
          <div className="mytodo_day-dialog-wrapper">
            {/* Add Task input field */}
            <div
              className="mytodo_day-dialog-addtask-input"
              onClick={() => {
                setShowSelectTaskName(true);
                setShowAddTask(false);
              }}
            >
              <img src={addTaskIcon} alt="addTask" />
              <p className="mytodo_day-dialog-addtask-input-text">
                {selectedTaskName}
              </p>
            </div>

            {/* Select Date input field */}
            <div
              onClick={() => {
                setShowSelectDate(true);
                setShowAddTask(false);
              }}
              className="mytodo_day-dialog-selectdate-input"
            >
              <img src={selectDateIcon} alt="selectDate" />
              <p className="mytodo_day-dialog-selectdate-input-text">
                {selectedDate}
              </p>
            </div>

            {/* Select Group input field */}
            <div className="mytodo_day-dialog-selectgroup-input">
              <img src={selectGroupIcon} alt="selectGroup" />
              <p className="mytodo_day-dialog-selectgroup-input-text">
                UXD Project
              </p>
            </div>

            {/* Solar selection field */}
            <div className="mytodo_day-dialog-solarSelect">
              <img
                src={
                  solarSelected === "MOON"
                    ? solarMoonIcon
                    : solarMoonIconDisabled
                }
                alt="solarMoon"
                className="mytodo_day-dialog-solarSelect-icons"
                onClick={() => {
                  solarSelected === "MOON"
                    ? setSolarSelected("NONE")
                    : setSolarSelected("MOON");
                }}
              />
              <img
                src={
                  solarSelected === "PLANET"
                    ? solarPlanetIcon
                    : solarPlanetIconDisabled
                }
                alt="solarPlanet"
                className="mytodo_day-dialog-solarSelect-icons"
                onClick={() => {
                  solarSelected === "PLANET"
                    ? setSolarSelected("NONE")
                    : setSolarSelected("PLANET");
                }}
              />
              <img
                src={
                  solarSelected === "STAR"
                    ? solarStarIcon
                    : solarStarIconDisabled
                }
                alt="solarStar"
                className="mytodo_day-dialog-solarSelect-icons"
                onClick={() => {
                  solarSelected === "STAR"
                    ? setSolarSelected("NONE")
                    : setSolarSelected("STAR");
                }}
              />
            </div>
          </div>
        </DialogContent>
        {/* Dialog Interaction with Add Task and Cancel Button */}
        <DialogActions style={{ margin: "auto" }}>
          <IonButton class="mytodo_day-dialog-add-button">Add Task</IonButton>
          <IonButton
            onClick={() => {
              setShowAddTask(false);
            }}
            class="mytodo_day-dialog-cancel-button"
          >
            Cancel
          </IonButton>
        </DialogActions>
      </Dialog>

      {
        //* Alert for Task name selection (opened after click on task name window in dialog) *//
      }
      <AddTodoSelectTaskName
        showSelectedTaskName={showSelectedTaskName}
        setShowSelectedTaskName={setShowSelectTaskName}
        setSelectedTaskName={setSelectedTaskName}
        setShowAddTask={setShowAddTask}
      />
      {
        //* Alert for Date selection (opened after click on date window in dialog) *//
      }
      <AddTodoSelectDate
        showSelectDate={showSelectDate}
        setShowSelectDate={setShowSelectDate}
        setSelectedDate={setSelectedDate}
        setShowAddTask={setShowAddTask}
      />
    </div>
  );
};

export default AddTaskDialog;
