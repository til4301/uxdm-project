/* -----
Imports
----- */

// React and Ionic
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
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
import { add } from "ionicons/icons";
// Luxon
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import AddTaskDialog from "../../components/AddTask/AddTaskDialog";
// Components
import DateSlider from "../../components/DateSlider";
import ProgressCard from "../../components/Progress/ProgressCard";
// Database
import { db } from "../../database/firebase";
/* MyTodo design */
import "../../design/Progress/progress_day.scss";
/* Global Theme */
import "../../theme/variables.scss";
import ProgressCardAll from "../../components/Progress/ProgressCardAll";
import AddTaskSuccess from "../../components/AddTask/AddTaskSuccess";

/* -----
Progress_Day.tsx
----- */

const Progress_Day: React.FC = () => {
  /* variables */
  let date = DateTime.local(); //current local time
  let tempNumberCheckedSubTasks = 0; //temporary storage for number of checked subTasks
  let allTasksNumber = 0;
  let checkedAllTasksNumber = 0;
  const [allTasks, setAllTasks] = useState(0); //number of all tasks
  const [allCheckedTasks, setAllCheckedTasks] = useState(0); //number of all checked tasks

  /* states */
  const [dateSlide, setDateSlide] = useState(""); //selected date for dateslider
  const [showAddTask, setShowAddTask] = useState(false); //defines if addtask popup is shown or not
  const [showSuccess, setShowSuccess] = useState(false); //defines if addtask success popup is shown or not

  const [data, setData] = useState<any[]>([]);

  /* useEffect - function is called once when component mounts*/
  useEffect(() => {
    setDateSlide(date.toISODate()); //current local time is set for the dateslider

    db.collection("todo").onSnapshot((snapshot) => {
      let tempArray: any = [];
      snapshot.forEach((item) => {
        let tempObject: any = { data: item.data(), id: item.id };
        tempArray.push(tempObject);
      });
      setData(tempArray);
    });
  }, []);

  /* return */
  return (
    <IonPage>
      <IonContent>
        <div className="progress_day-wrapper">
          {/*
            DateSlider for switching between dates
          */}
          <DateSlider
            dateSlide={dateSlide}
            setDateSlide={setDateSlide}
            variant="day"
          />

          {/*
            Showing one overall task progress card at the top    
          */}
          {data.length > 0 &&
            data.map((Todo, i) => {
              if (DateTime.fromISO(Todo.data.date).toISODate() === dateSlide) {
                // Fetching number of checked subtasks
                db.collection("subtask")
                  .where("parentId", "==", Todo.id)
                  .where("checked", "==", true)
                  .onSnapshot((snapshot) => {
                    let tempArray: any = [];
                    snapshot.forEach((item) => {
                      tempArray.push(item);
                    });
                    setAllCheckedTasks(checkedAllTasksNumber);
                  });
              }
            })}
            {/*
          <ProgressCardAll
            numberSubTasks={12}
            numberCheckedSubTasks={allCheckedTasks}
          />
          */}

          {/*
            Function for mapping all todos that fit to current selected date period
          */}
          {data.length > 0 &&
            data.map((Todo, i) => {
              if (DateTime.fromISO(Todo.data.date).toISODate() === dateSlide) {
                // Fetching total number of subtasks

                return (
                  <ProgressCard
                    task={Todo.data.task}
                    count={i + 1}
                    variant="normal"
                    parentId={Todo.id}
                  />
                );
              }
            })}
        </div>
      </IonContent>

      {/*
        Dialog for Add Task (opened after click on Add Task button)
      */}
      <AddTaskDialog
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
        setShowSuccess={setShowSuccess}
      />

      {/*
        Dialog for Success Add Task (opened after successful creating of task)
      */}
      <AddTaskSuccess
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />

      {/*
        Add Task button (opens the dialog for Add Task)
      */}
      <div className="mytodo_day-addtask-button-wrapper">
        <IonButton
          class="mytodo_day-addtask-button"
          onClick={() => setShowAddTask(true)}
        >
          <IonIcon icon={add} class="mytodo_day-addtask-button-icon"></IonIcon>
        </IonButton>
      </div>
    </IonPage>
  );
};

export default Progress_Day;
