import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import News from './components/News/News';
import Nav from './components/Nav/Nav';
import Books from './components/Books/Books';
import Movies from './components/Movies/Movies';
import Sports from './components/Sports/Sports';

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
            <Route path="/sports">
              <Sports />
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
