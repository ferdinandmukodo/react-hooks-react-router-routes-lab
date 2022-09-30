import React from "react";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <div style={{ display: "flex", padding: "20px" }} className="navbar">
      <ul>
        <li><NavLink to="/">Home </NavLink> </li>
        <li> <NavLink to="/actors">Actors </NavLink></li>
        <li> <NavLink to="/movies"> Movies</NavLink></li>
        <li><NavLink to="/directors">Directors </NavLink> </li>
      </ul>

    </div>

  )

}

export default NavBar;