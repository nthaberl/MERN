import { Route, Redirect } from 'react-router-dom';
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

      {/* Redirects path back to main page */}
      <Route exact path="/authors">
        <Redirect to="/" />
      </Route>

      {/* CREATE */}
      <Route exact path="/new">
        <Create />
      </Route>

      {/* UPDATE */}
      <Route exact path="/edit/:id">
        <Update />
      </Route>

    </div>
  );
}

export default App;
