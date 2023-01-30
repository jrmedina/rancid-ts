import React, { useState, useEffect } from "react";
import { data } from "./data";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css";

const App = () => {
  const [movie, setMovie] = useState();

  const selectMovie = (e: any) => {
    const matchingMovie = data.movies.find((movie) => movie.id === Number(e.target.id));
    setMovie(matchingMovie);

    // console.log(Number(e.target.id));
  };

  return (
    <main className="App">
      <h1>Some catchy name</h1>
      <MoviesContainer movies={data.movies} selectMovie={selectMovie} />
    </main>
  );
};

export default App;
