import React, { useState } from 'react';

const Tasks = (props) => {
    const { tasks, completeTask, handleDelete } = props; //passing in the props from app.js, letting us use functionality in this component

    return (
        <div>
            <h3>List of Tasks</h3>
            {tasks.map((task, idx) => {
                return (
                    <div key={idx}>
                        <input type="checkbox" onChange={(e) => completeTask(idx)} checked={task.completed} className="uk-checkbox" /> {/* need to connect checkbox to state of current state, checkboxes have boolean values so helps to connect it to a state that is stored as boolean */}
                        {
                            (task.completed) ? <p style={{ display: 'inline-block', textDecoration: "line-through" }}>{task.description}</p> : <p style={{ display: 'inline-block' }}>{task.description}</p>
                        }
                        <button onClick={(e) => handleDelete(idx)} className="uk-button uk-button-default uk-button-small">Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks;