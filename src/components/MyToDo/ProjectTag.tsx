/* -----
Imports
----- */

// React and Ionic
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
import React from "react";
/* -----
Design
----- */
/* MyTodo design */
import "../../design/projecttag.scss";
/* Global Theme */
import "../../theme/variables.scss";

/* -----
.ProjectTag.tsx
----- */

/* Props */
interface Props {
  project: string;
}

//Function
const ProjectTag: React.FC<Props> = ({ project }) => {
  return <div className="project-tag">{project}</div>;
};

export default ProjectTag;
