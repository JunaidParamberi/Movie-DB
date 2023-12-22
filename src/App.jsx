import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";
import Filter from "./Components/Filter";

function App() {
  const API_KEY = "f2db34f2c291500db37a87ab83ea5545";
  const BASE_URL = "https://api.themoviedb.org/3/search/movie";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultMovie, setDefaultMovies] = useState([]);

  useEffect(() => {
    const defaultMovies = () => {
      const defaultAPi =
        "https://api.themoviedb.org/3/discover/movie?api_key=f2db34f2c291500db37a87ab83ea5545";

      fetch(defaultAPi)
        .then((res) => res.json())
        .then((data) => {
          setDefaultMovies(data.results);
        })
        .catch((error) => {
          console.error("Error fetching default movies:", error);
        });
    };

    defaultMovies();
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}?api_key=${API_KEY}&query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [searchTerm]);

  const displayMovies = movies.length > 0 ? movies : defaultMovie;

  const moveCardElements = displayMovies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter />
      <div className="card">{moveCardElements}</div>
    </div>
  );
}

export default App;
