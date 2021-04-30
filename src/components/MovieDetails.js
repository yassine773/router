import React from "react";
import "../assets/css/MovieDetails.css";
import { Link } from "react-router-dom";

const MovieDetails = props => {
  return (
    <div className="MovieDetails">
      <div className="MovieDetails_img">
        <img src={props.movie.ImgSrc} alt={props.movie.name} />
      </div>
      <div className="MovieDetails_content">
        <h3>
          <span className="h_title">Movie Name:</span>
          <span className="title">{props.movie.linkName}</span>
        </h3>
        <h4>
          <span className="h_title">Release:</span>
          <span className="release">{props.movie.release}</span>
        </h4>
        <h4>
          <span className="h_title">Story: </span>
          <span className="story">{props.movie.story}</span>
        </h4>
        <Link className="go_back_btn" exact to="/movieList">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
