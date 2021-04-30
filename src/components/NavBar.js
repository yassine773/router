import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/NavBar.css";

const NavBar = props => {
  const movieLink = props.movies.map(m => {
    return (
      <NavLink activeClassName="active_link" key={m.id} exact to={`/${m.name.toLowerCase()}`}>
        {m.linkName}
      </NavLink>
    );
  });

  return (
    <nav className="NavBar">
      <NavLink activeClassName="active_link" to="/movieList">Home</NavLink>
      {movieLink}
    </nav>
  );
};

export default NavBar;
