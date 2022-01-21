import React, { useState} from 'react';
import './App.css';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newTask);
    if (newTask.length === 0) {
      return alert("Please add an item")
    }
    const taskObj = {
      description: newTask,
      completed: false
    }

    setTasks([...tasks, taskObj]);
    setNewTask("");
    console.log(tasks)
  }



  const handleDelete = (delIdx) => {
    const remainingTasks = tasks.filter((task, idx) => {
      return idx !== delIdx;
    });
    setTasks(remainingTasks); 
  }

  const completeTask = (updateIdx) => {
    let updatedTasks = tasks.map((task, idx) => {
      if (updateIdx === idx) {
        task.completed = !task.completed;
      }
      return task

    });
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <TaskForm handleSubmit={handleSubmit} newTask={newTask} setNewTask={setNewTask}/>
      <Tasks tasks={tasks} completeTask={completeTask} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
