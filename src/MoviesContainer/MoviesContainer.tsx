import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import { AllMovies } from "../resources/model";
import "./MoviesContainer.css";

const MoviesContainer: React.FC<AllMovies> = ({ movies, selectMovie }) => {
  const movieCards = movies.map((movie: any) => {
    return (
      <MiniCard
        key={movie.id}
        title={movie.title}
        id={movie.id.toString()}
        image={movie.poster_path}
        selectMovie={selectMovie}
      />
    );
  });
  return <div className="movies-container">{movieCards}</div>;
};

export default MoviesContainer;
