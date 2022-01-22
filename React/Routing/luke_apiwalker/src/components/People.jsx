import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';
import axios from 'axios';

const People = (props) => {
    const [people, setPeople] = useState(null); //using null because sometimes empty string can trip up ternaries
    //fine in forms but not as great for displays
    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data);
                setPeople(response.data)
            })
            .catch(error => {
                console.log("error")
            })
    }, [id]);

    return (
        <div className="uk-card uk-card-default uk-card-body">
            {
                people ? (
                    <div>
                        <h1>{people.name}</h1>
                        <p>Height: {people.height} cm</p>
                        <p>Hair Color: {people.hair_color}</p>
                        <p>Skin Color: {people.skin_color}</p>
                        <p>Birth Year: {people.birth_year}</p>
                    </div>)

                    :
                    <Error/>
                //display error component
            }
        </div>
    )
};

export default People;
