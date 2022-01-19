import React, { useState } from "react";

const Tabs = (props) => {
    const { tabs } = props;

    const [active, setActive] = useState(tabs[0]); //active tab is first in array of tabs, sent in from props

    const handleClick = (idx) => {
        setActive(tabs[idx]);
    }

    return (
        <div>
            <div>
                {tabs.map((tabs, idx) => {
                    return (<button class="uk-button uk-button-default" style={{ marginBottom: "20px" }} key={idx} onClick={() => handleClick(idx)} value={tabs.name}>{tabs.name}</button> //sending index of button to handleclick function, which sets
                    )
                })}

                {

                    <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m" style={{ margin: "auto" }}>
                        <p>{active.message} </p> 
                        {/* ^^ shows message of current active tab, tabs[0] is default from line 6  */}
                    </div>
                }
            </div>
        </div>
    )
}

export default Tabs;