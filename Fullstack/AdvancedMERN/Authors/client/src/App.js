import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> Favorite Authors</h2>
      {/* READ ALL */}
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/authors">
        <Redirect to="/" />
      </Route>

      <Route exact path="/new">
        <Create />
      </Route>

      <Route exact path="/edit/:id">
        <Update />
      </Route>

    </div>
  );
}

export default App;
