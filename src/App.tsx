import React, { useState, useEffect } from "react";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Movie, Movies } from "./resources/model";
import MovieCard from "./MovieCard/MovieCard";
import { getMovies, getMovie } from "./resources/apiCalls";

interface MovieDetails {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    average_rating: number;
    release_date: string;
    budget: number;
    genres: string[];
    revenue: number;
    tagline: string;
    overview: string;
    runtime: number;
  };



const App = () => {
  const [movie, setMovie] = useState<MovieDetails>();
  const [movies, setMovies] = useState<Movies>();

  useEffect(() => {
    getMovies().then((data) => setMovies(data.movies));
  }, []);

  const selectMovie = (e: any) => {
    getMovie(e.target.id).then((data) => setMovie(data.movie));
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
        <Route exact path="/:id" render={() => movie&& <MovieCard movie={movie} />} />
      </Switch>
    </main>
  );
};

export default App;
