import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/Tasks';
import Tasks from './components/Tasks';

function App() {
  const [newTask, setNewTask] = useState(""); //for the form to create a new task
  const [tasks, setTasks] = useState([]); //for showing list of tasks
  /*   this is equivalent to:
    const taskStateArr = useState("");
    const task = taskStateArr[0];
    const setTask = newTaskStateArr[1];
   */



  /* Since states are stored on App.js, functions will also be written here since functions will need access to those states
  otherwise would have to pass in states */
  //CREATE -- to/from form
  const handleSubmit = e => {
    e.preventDefault();
    console.log(newTask);
    if (newTask.length === 0) {
      return alert("Please add an item")
    }
    const taskObj = {
      description: newTask,
      completed: false
    } //when adding a new task will automatically pass in a task OBJECT with a default value of false!
    //setTasks and pass in a new object containing current values and adding in newest task
    setTasks([...tasks, taskObj]);
    setNewTask(""); //resets the form to blank after adding to setTasks
    console.log(tasks)
  }


  //DELETE - from display
  //sending the index of the "task" to this delete function
  const handleDelete = (delIdx) => {
    const remainingTasks = tasks.filter((task, idx) => { //even though first parameter isn't being used we have to add one. idx will always be second parameter since filter function takes in 2 params
      return idx !== delIdx; //when the index is NOT equal to the index we want to delete, we want to keep it in the list
    });
    setTasks(remainingTasks); //remaining tasks is brand new array with "deleted" items filtered out
  }

  //UPDATE(checkbox) - from display
  const completeTask = (updateIdx) => {
    let updatedTasks = tasks.map((task, idx) => {
      if (updateIdx === idx) {
        task.completed = !task.completed; //if the index passed in matches the value we will only reverse the value for that item at that index
        /*         let updatedTasks = { ...task, completed: !task.completed}
                return updatedTasks 
                this would be "proper" way to update to avoid mutating task directly*/
      }
      return task //returns every task
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <TaskForm handleSubmit={handleSubmit}/>
      <Tasks tasks={tasks} completeTask={completeTask} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
