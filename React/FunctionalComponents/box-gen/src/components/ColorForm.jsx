import React, { useState } from "react";


const ColorForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); //prevents browser from refreshing on every submit
        const newColor = {
            color
        };

        //function from props -> app.js
        props.addBox(newColor);

        //resetting the state
        setColor("");
    };

    const handleColor = e => {
        setColor(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Pick a color!</p>
                    <p><input type="text" value={color} onChange={handleColor}>

                    </input>
                    <button>Submit</button>
                </p>
            </form>
        </div>

    )
}
export default ColorForm;