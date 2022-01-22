import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';
import axios from 'axios';

const Planets = (props) => {
    const [planets, setPlanets] = useState("");
    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data);
                setPlanets(response.data)
            })
            .catch(error => {
                console.log("error")
            })
    }, [id]);

    return (
        <div className="uk-card uk-card-default uk-card-body">
            {
                planets ? (
                    <div>
                        <h1>{planets.name}</h1>
                        <p>Climate: {planets.climate}</p>
                        <p>Terrain: {planets.terrain}</p>
                        <p>Surface Water: {planets.surface_water}</p>
                        <p>Population: {planets.population}</p>
                    </div>)
                    :
                    <Error/>
            }
        </div>
    )
};

export default Planets;
