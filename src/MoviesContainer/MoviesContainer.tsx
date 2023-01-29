import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import { Movies } from "../model";
import "./MoviesContainer.css";

const MoviesContainer: React.FC<Movies> = ({ movies }) => {
  const movieCards = movies.map((movie) => {

    return (
      <MiniCard
        key={movie.id}
        title={movie.title}
        id={movie.id.toString()}
        image={movie.poster_path}
      />
    );
  });
  return <div className="movies-container">{movieCards}</div>;
}

export default MoviesContainer
