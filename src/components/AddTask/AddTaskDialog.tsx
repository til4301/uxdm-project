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
/* -----
Design
----- */
/* AddTaskDialog design */
import "../../design/AddTask/addtaskdialog.scss";
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










/* -----
AddTaskDialog.tsx
----- */

// Props
interface Props {
  showAddTask: boolean;
  setShowAddTask: Function;
}
//Function
const AddTaskDialog: React.FC<Props> = ({ showAddTask, setShowAddTask }) => {
 
  /* states */
  //Alerts for user input
  const [showSelectedTaskName, setShowSelectTaskName] = useState(false); //boolean if task name input alert is active
  const [showSelectDate, setShowSelectDate] = useState(false); //boolean if date input alert is active
  const [showSelectedProject, setShowSelectedProject] = useState(false); //boolean if project selection alert is active

  //Variables for storing input values
  const [selectedTaskName, setSelectedTaskName] = useState(""); //variable for set task name
  const [selectedDate, setSelectedDate] = useState(""); //variable for set date
  const [selectedProject, setSelectedProject] = useState(""); //variable for set project
 
  // solar selection
  const [solarSelected, setSolarSelected] = useState("NONE"); //switch for selected solarIcon which has to be colored blue


  /* return */
  return (
    <div>
      {/*
      Dialog for adding task
      */}
      <Dialog
        open={showAddTask}
        onClose={() => {
          setShowAddTask(false);
          setSolarSelected("NONE");
        }}
        id="addtaskdialog-dialog"
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
          <div className="addtaskdialog-dialog-wrapper">
            {/* 
              Add Task input field 
            */}
            <div
              className="addtaskdialog-dialog-addtask-input"
              onClick={() => {
                setShowSelectTaskName(true);
                setShowAddTask(false);
              }}
            >
              <img src={addTaskIcon} alt="addTask" />
              {selectedTaskName === "" ? (
                <p className="addtaskdialog-dialog-input-text-default">
                  Enter Task Name
                </p>
              ) : (
                <p className="addtaskdialog-dialog-input-text">
                  {selectedTaskName}
                </p>
              )}
            </div>

            {/* 
              Select Date input field 
            */}
            <div
              onClick={() => {
                setShowSelectDate(true);
                setShowAddTask(false);
              }}
              className="addtaskdialog-dialog-selectdate-input"
            >
              <img src={selectDateIcon} alt="selectDate" />
              {selectedDate === "" ? (
                <p className="addtaskdialog-dialog-input-text-default">
                  Select Date
                </p>
              ) : (
                <p className="addtaskdialog-dialog-input-text">
                  {DateTime.fromISO(selectedDate).toFormat("d")+"."+DateTime.fromISO(selectedDate).toFormat("L")+"."+DateTime.fromISO(selectedDate).toFormat("yy")+" at "+DateTime.fromISO(selectedDate).toFormat("T")}
                </p>
              )}
            </div>

            {/* 
              Select Project input field 
            */}
            <div
              onClick={() => {
                setShowSelectedProject(true);
                setShowAddTask(false);
              }}
              className="addtaskdialog-dialog-selectProject-input"
            >
              <img src={selectGroupIcon} alt="selectProject" />
              {selectedProject === "" ? (
                <p className="addtaskdialog-dialog-input-text-default">
                  Assing Project
                </p>
              ) : (
                <p className="addtaskdialog-dialog-input-text">
                  {selectedProject}
                </p>
              )}
            </div>

            {/* 
              Solar selection field 
            */}
            <div className="addtaskdialog-dialog-solarSelect">
              <img
                src={
                  solarSelected === "MOON"
                    ? solarMoonIcon
                    : solarMoonIconDisabled
                }
                alt="solarMoon"
                className="addtaskdialog-dialog-solarSelect-icons"
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
                className="addtaskdialog-dialog-solarSelect-icons"
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
                className="addtaskdialog-dialog-solarSelect-icons"
                onClick={() => {
                  solarSelected === "STAR"
                    ? setSolarSelected("NONE")
                    : setSolarSelected("STAR");
                }}
              />
            </div>
          </div>
        </DialogContent>

        {/* 
          Dialog Interaction with Add Task and Cancel Button 
        */}
        <DialogActions style={{ margin: "auto" }}>
          <IonButton class="addtaskdialog-dialog-add-button">
            Add Task
          </IonButton>
          <IonButton
            onClick={() => {
              setShowAddTask(false);
            }}
            class="addtaskdialog-dialog-cancel-button"
          >
            Cancel
          </IonButton>
        </DialogActions>
      </Dialog>

      {/*
        Alert for Task name inout (opened after click on task name window in dialog)
      */}
      <AddTodoSelectTaskName
        showSelectedTaskName={showSelectedTaskName}
        setShowSelectedTaskName={setShowSelectTaskName}
        setSelectedTaskName={setSelectedTaskName}
        setShowAddTask={setShowAddTask}
      />
      {/*
        Alert for date selection (opened after click on date window in dialog)
      */}
      <AddTodoSelectDate
        showSelectDate={showSelectDate}
        setShowSelectDate={setShowSelectDate}
        setSelectedDate={setSelectedDate}
        setShowAddTask={setShowAddTask}
      />

      {/*
        Alert for project selection (opened after click on project selection window in dialog)
      */}
      <AddTodoSelectProject
        showSelectedProject={showSelectedProject}
        setShowSelectedProject={setShowSelectedProject}
        setSelectedProject={setSelectedProject}
        setShowAddTask={setShowAddTask}
      />
    </div>
  );
};

export default AddTaskDialog;
