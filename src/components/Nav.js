import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './NavBar.css'

function Nav() {
    return(
        <div className="topnav">
            <img className="navbarLogo" src="https://png2.cleanpng.com/sh/cac52aaed4e404b1f46890d66ac4ee6f/L0KzQYm3VMA5N5Npj5H0aYP2gLBuTgRpbV5zfek2eXB1e377if1me15oh995YX78PbBsl716d6NwRdVydImwfrbATfpmeqRqReZybXX2PYbogBFmOmY6StMAZUa3PoO6UMU1O2Y7Sac7M0K3RYe8U8E4O2cziNDw/kisspng-the-new-york-times-company-new-york-city-new-jerse-times-5acae2552a5e64.2305435615232456531736.png" alt="New York Times" />
            <Link className="elements" to="/">News</Link>
            <Link className="elements" to="/books">Books</Link>
            <Link className="elements" to="/movies">Movies</Link>
        </div>
    )
    
}

export default Nav;

// 2VwRbeVmwKCp6P2xCiOqG1wGWkTdYeq2