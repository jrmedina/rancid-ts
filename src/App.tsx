import React, { useState } from "react";
import { data } from "./data";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Movie } from "./model";
import MovieCard from "./MovieCard/MovieCard";
const App = () => {
  const [movie, setMovie] = useState<Movie>();

  const selectMovie = (e: any) => {
    const matchingMovie = data.movies.find(
      (movie) => movie.id === Number(e.target.id)
    );
   
    setMovie(matchingMovie);
    // need to set props to expect movie obj when setting state.
  };

  return (
    <main className="App">
      <h1>Some catchy name</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MoviesContainer movies={data.movies} selectMovie={selectMovie} />
          )}
        />
        <Route
          exact
          path="/:id"
          render={() => (
            <MovieCard movie={movie}/>
          )}
        />
      </Switch>
    </main>
  );
};

export default App;
