import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Multi from './components/Multi';
import Var from './components/Var';

    
function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <h1>Routing Practice</h1>
      <div className="display">
      <Switch>
      <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/:variable">
          <Var/>
        </Route>
      <Route exact path="/:variable/:color1/:color2">
          <Multi />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}
    
export default App;
