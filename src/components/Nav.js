import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  .navbar {
    margin: 0;
    padding: 0;
    height: 60px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba (0, 0, 0, 0, 25);
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
  }
`;

export default function Nav() {
  return (
    <StyledNavbar>
      <ul classname="navbar">
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
    </StyledNavbar>
  );
}
