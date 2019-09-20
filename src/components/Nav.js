import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="navbar">
      <li>
        <NavLink exact to="/" activeClassName="activeNavButton">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="characters" activeClassName="activeNavButton">
          Characters
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" activeClassName="activeNavButton">
          Search
        </NavLink>
      </li>
    </ul>
  );
}
