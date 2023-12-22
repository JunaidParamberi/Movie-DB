import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";
import Filter from "./Components/Filter";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <div className="card">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
