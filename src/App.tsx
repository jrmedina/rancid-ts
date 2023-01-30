import React, { useState} from "react";
import { data } from "./data";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css";

const App = () => {
  const [movie, setMovie] = useState();

  const selectMovie = (e: any) => {
    const matchingMovie = data.movies.find((movie) => movie.id === Number(e.target.id));
    setMovie(matchingMovie);
    // need to set props to expect movie obj when setting state.
  };

  return (
    <main className="App">
      <h1>Some catchy name</h1>
      <MoviesContainer movies={data.movies} selectMovie={selectMovie} />
    </main>
  );
};

export default App;
