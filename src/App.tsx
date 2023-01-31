import React, { useState, useEffect } from "react";
import { data } from "./data";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Movie, Movies } from "./model";
import MovieCard from "./MovieCard/MovieCard";
const App = () => {
  const [movie, setMovie] = useState<Movie>();
  const [movies, setMovies] = useState<Movies>();

  const apiCall = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`).then(
      (response) => {
        return response.json();
      }
    );
  };

  useEffect(() => {
    apiCall().then((data) => setMovies(data.movies));

  }, []);

  const selectMovie = (e: any) => {
console.log(data.movies);
    
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
