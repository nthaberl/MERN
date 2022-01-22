import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';
import axios from 'axios';

const Starships = (props) => {
    const [starship, setStarship] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response => {
                console.log(response.data);
                setStarship(response.data)
            })
            .catch(error => {
                console.log("error")
            })
    }, [id]);

    return (
        <div className="uk-card uk-card-default uk-card-body">
            {
                starship ? (
                    <div>
                        <h1>{starship.name}</h1>
                        <p>Model: {starship.model}</p>
                        <p>Manufacturer: {starship.manufacturer}</p>
                        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
                        <p>Ship's Value: {starship.cost_in_credits} (in Galactic Credit Standard)</p>
                    </div>)
                    :
                    <Error/>
            }
        </div>
    )
};

export default Starships;
