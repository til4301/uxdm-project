/* -----
Imports
----- */

// React and Ionic
import React from "react";

/* -----
Design
----- */

/* MyTodo design */
import "../design/todotag.scss";

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
.TodoTag.tsx
----- */

/* Props */
interface TodoProps {
  tag: String;
}

const TodoTag: React.FC<TodoProps> = ({ tag }) => {
  return <div className="todo-tag">{tag}</div>;
};

export default TodoTag;
