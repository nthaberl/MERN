import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Var = (props) => {


    const { variable } = useParams();

    return (
        <div>
            {
                isNaN(variable) ? <h2>The word is : {variable}</h2> : <h2>The number is : {variable}</h2>
                //can also render COMPONENTS instead of html tags
            }
        </div>
    )
};

export default Var;