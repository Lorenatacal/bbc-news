import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import News from './components/News';
import Nav from './components/Nav';
import Books from './components/Books';
import Movies from './components/Movies';

function App() {

  return (
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/">
              <News />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
