import React, { useEffect, useState } from "react";
import cover from "../assets/movie-cover.png";

function MovieCard({ movie }) {
  const [imagePath, setImagePath] = useState(cover);

  useEffect(() => {
    const loadImage = () => {
      if (movie.poster_path) {
        const imageURL = movie.poster_path;
        setImagePath(imageURL);
      } else {
        setImagePath(cover);
      }
    };

    loadImage();
  }, [movie.poster_path]);

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${imagePath}`} alt="" />
      <div className="texts">
        <p className="country">Release Date : {movie.release_date}</p>
        <h1>{movie.title}</h1>
        <h2 className="score">Rating: {movie.vote_average}</h2>
        <h6>Crime, Comedy, Mystery</h6>
      </div>
      <button>See Details</button>
    </div>
  );
}

export default MovieCard;
