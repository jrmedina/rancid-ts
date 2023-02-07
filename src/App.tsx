import React, { useState, useEffect } from "react";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Movie, MovieDetails, Movies } from "./resources/model";
import MovieCard from "./MovieCard/MovieCard";
import { getMovies, getMovie } from "./resources/apiCalls";
import Search from "./Search/Search";

const App = () => {
  const [movie, setMovie] = useState<MovieDetails>();
  const [movies, setMovies] = useState<Movies>();

  useEffect(() => {
    getMovies().then((data) => setMovies(data.movies));
  }, []);

  const selectMovie = (e: React.MouseEvent<HTMLImageElement>) => {
    getMovie(e.currentTarget.id).then((data) => setMovie(data.movie));
  };

  const searchMovies = (e: string) => {
    const results =
      movies &&
      movies.filter((movie: Movie) =>
        movie.title.toLowerCase().includes(e.toLowerCase())
      );
    setMovies(results);
  };

  return (
    <main className="App">
      <h1 className="header">Some catchy name</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            movies && (
              <>
                <Search searchMovies={searchMovies} />
                <MoviesContainer movies={movies} selectMovie={selectMovie} />
              </>
            )
          }
        />
        <Route
          exact
          path="/:id"
          render={() => movie && <MovieCard movie={movie} />}
        />
      </Switch>
    </main>
  );
};

export default App;
