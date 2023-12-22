import React from "react";
import cover from "../assets/movie-cover.png";

function MovieCard() {
  return (
    <div className="movie-card">
      <img src={cover} alt="" />
      <div className="texts">
        <p className="country">USA, 2022</p>
        <h1>GLASS ONION: KNIVES OUT</h1>
        <h2 className="score">Score: 7/10</h2>
        <h6>Crime, Comedy, Mystery</h6>
      </div>
      <button>See Details</button>
    </div>
  );
}

export default MovieCard;
