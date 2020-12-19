/* -----
Imports
----- */

// React and Ionic
import React, { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

// Material UI
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// Components

//! just for testing a database of Tasks of a day
// Database
import Data from "../database/todo.json";

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
.TodoDialog.tsx
----- */

interface Props {
    showAddTask: boolean;
    setShowAddTask: Function;
}

const TodoDialog: React.FC<Props> = ({showAddTask, setShowAddTask}) => {
  /* states */

  return (
    <IonPage>
      <Dialog open={showAddTask} onClose={() => setShowAddTask(false)}>
        <DialogContent>
          <div className="todoDialog-wrapper">
            <h1>Hallo</h1>
          </div>
        </DialogContent>
        <DialogActions>
          <button>Hallo</button>
          <button>Bye</button>
        </DialogActions>
      </Dialog>
    </IonPage>
  );
};

export default TodoDialog;
