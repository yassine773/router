import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/MovieList.css";
const MovieList = props => {
  const movieList = props.movies.map(m => {
    return (
      <div className="MovieList_container" key={m.id}>
        <img src={m.ImgSrc} alt={m.name} className="MovieList_img" />
        <Link to={`/${m.name.toLowerCase()}`}>{m.name}</Link>
      </div>
    );
  });

  return <div className="MovieList">{movieList}</div>;
};

export default MovieList;
