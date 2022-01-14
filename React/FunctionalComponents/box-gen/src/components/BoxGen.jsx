import React, { useState } from 'react';


const BoxGen = (props) => {

    console.log(props);
    const { currentColor } = props;


    return (
        <div>
            {/* {JSON.stringify(currentColor[0].color)} */}
            {
                currentColor.map((color, idx) => {
                    return (<div key={idx} style={{ backgroundColor: color.color, height: "50px", width: "50px", display: "inline-block", margin: "15px", borderRadius: "5px"}}></div>)
                })
            }
        </div>
    )
}


export default BoxGen;