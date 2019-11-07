import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function Nav() {
    return(
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/travel">Travel</Link>
            <br />
        </div>
    )
    
}

export default Nav;