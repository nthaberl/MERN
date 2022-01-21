import React, { useState } from "react";

const TaskForm = (props) => {
    const { handleSubmit } = props;
    
    return (<div>
        <h1><b>To Do List</b></h1>
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <input onChange={(e) => { setNewTask(e.target.value); }} type="text" value={newTask} className="uk-input" />
            <div>
                <button className="uk-button uk-button-default uk-button-small">Add</button>
            </div>
        </form>
    </div>)
}

export default TaskForm;