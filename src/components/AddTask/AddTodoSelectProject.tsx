/* -----
Imports
----- */

// React and Ionic
import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonButton, IonAlert } from "@ionic/react";

// Material UI

// Components
import TodoCard from "../TodoCard";

//! just for testing a database of Tasks of a day
// Database
import Data from "../../database/todo.json";

// Resources

/* ----- 
Design
----- */

/* MyTodo design */
import "../../design/addtodoalert.scss";

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
import "../../theme/variables.scss";

/* -----
AddTodoSelectProject.tsx
----- */

interface Props {
  showSelectedProject: boolean;
  setShowSelectedProject: Function;
  setSelectedProject: Function;
  setShowAddTask: Function;
}

const AddTodoSelectProject: React.FC<Props> = ({
  showSelectedProject,
  setShowSelectedProject,
  setSelectedProject,
  setShowAddTask,
}) => {
  /* states */
  const [projectList, setProjectList] = useState<Array<object>>([]);

  /* functions */
  const collectProjects = () => {
    Data.Projects.map((project) => {
      setProjectList((arr) => [
        ...arr,
        { name: project, type: "radio", label: project, value: project },
      ]);
    });
  };

  /* useEffect */
  useEffect(() => {
    collectProjects();
  }, []);

  /* return */
  return (
    <IonAlert
      isOpen={showSelectedProject}
      onDidDismiss={() => {
        setShowAddTask(true);
        setShowSelectedProject(false);
      }}
      cssClass="selectDate-alert"
      header={"Project"}
      subHeader={"Please choose a project to assign to your task."}
      inputs={projectList}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Ok",
          handler: (alertData) => {
            if (alertData === undefined) {
              console.log("1");
            } else {
              setSelectedProject(alertData);
              console.log(alertData);
            }
          },
        },
      ]}
    />
  );
};

export default AddTodoSelectProject;
