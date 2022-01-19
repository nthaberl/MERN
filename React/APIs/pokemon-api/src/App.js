import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  //Vanilla JS fetch
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?&limit=151") //fetch function returns a promise
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
        setPokemon(jsonResponse.results)
      })
      .catch(error => console.log(error)) //do this if there is an error
  }

  //with AXIOS
  const axPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?&limit=151")
    .then(response => {
      console.log(response.data.results);
      setPokemon(response.data.results)}) //axios wraps everything in a .data, pokemon API puts all pokemon objects in .results object
    .catch(error => console.log(error))
  }

  return (
    <div className="App">

        <h3>The original 151 Pokemon!</h3>

        <button onClick={fetchPokemon}> Fetch Pokemon </button>
        <button onClick={axPokemon}> Fetch Pokemon, but with Axios!</button>
        {/* {JSON.stringify(pokemon)} */}
        <div className='box'>
        <ol>
          {pokemon.map((pokemon, idx) => {
            return (
              <li key={idx}>{pokemon.name}</li>
            )
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
