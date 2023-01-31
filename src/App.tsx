import React, { useState, useEffect } from "react";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Movie, Movies } from "./resources/model";
import MovieCard from "./MovieCard/MovieCard";
import { apiCall } from "./resources/apiCalls";
const App = () => {
  const [movie, setMovie] = useState<Movie>();
  const [movies, setMovies] = useState<Movies>();



  useEffect(() => {
    apiCall().then((data) => setMovies(data.movies));

  }, []);

  const selectMovie = (e: any) => {

    const matchingMovie = movies && movies.find((movie:any) => movie.id === Number(e.target.id));

    setMovie(matchingMovie);
  };

  return (
    <main className="App">
      <h1>Some catchy name</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            movies && (
              <MoviesContainer movies={movies} selectMovie={selectMovie} />
            )
          }
        />
        <Route exact path="/:id" render={() => <MovieCard movie={movie} />} />
      </Switch>
    </main>
  );
};

export default App;
