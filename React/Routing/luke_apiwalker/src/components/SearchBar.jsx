import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = (props) => {
    //variables in our form/searchbar that can change
    const [ category, setCategory ] = useState("people");
    const [ id, setId ] = useState(null);
    const history = useHistory();

    //functions to handle on change events
    const handleCategory = e => {
        setCategory(e.target.value)
    };

    const handleId = e => {
        setId(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/${category}/${id}`);
    };


    return (
        <div>
            <h1><b>Find info with SWAPI</b></h1>
            <form onSubmit={handleSubmit}>
                <p>
                    Search for: 
                    <select className="uk-select" style={{width: "100px", margin: "5px" }} onChange={handleCategory}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                    </select>
                    ID:
                    <input className="uk-input" style={{width: "50px", margin: "5px"}} type="number" onChange={handleId}/>
                    <button className="uk-button uk-button-primary uk-button-small">Search</button>
                </p>
            </form>
        </div>
    )
};

export default SearchBar;
