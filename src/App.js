import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Nav from './components/Nav'
import Travel from './components/Travel'

function App() {

  return (
      <Router>
        <Nav/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/travel">
              <Travel />
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
