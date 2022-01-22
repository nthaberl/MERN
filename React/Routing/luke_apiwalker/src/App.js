import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planets />
          </Route>
          <Route path="/starships/:id">
            <Starships />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
