import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Multi = (props) => {


    const { variable, color1, color2 } = useParams();
    // console.log(variable);
    // console.log(color1);
    // console.log(color2);
    return (
        <div>
            {
                isNaN(variable) ? <h2 style={{ color: color1, backgroundColor: color2 }}>The word is : {variable}</h2> : <h2>The number is : {variable}</h2>
            }
        </div>
    )
};

export default Multi;