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
import React, { useEffect, useState } from "react";
//! just for testing a database of Tasks of a day
// Database
import Data from "../../database/todo.json";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/AddTask/addtodoalert.scss";
/* Global Theme */
import "../../theme/variables.scss";






/* -----
AddTodoSelectProject.tsx
----- */

//Props
interface Props {
  showSelectedProject: boolean;
  setShowSelectedProject: Function;
  setSelectedProject: Function;
  setShowAddTask: Function;
}

//Function
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

  /* useEffect - function is called once when component mounts*/
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
            } else {
              setSelectedProject(alertData);
            }
          },
        },
      ]}
    />
  );
};

export default AddTodoSelectProject;
