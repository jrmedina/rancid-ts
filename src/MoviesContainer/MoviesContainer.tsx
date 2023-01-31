import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import { AllMovies } from "../model";
import "./MoviesContainer.css";

//  interface AllMovies {
//    movies: {
//      id: number;
//      poster_path: string;
//      backdrop_path: string;
//      title: string;
//      average_rating: number;
//      release_date: string;
//    }[];
//    selectMovie: React.Dispatch<React.SetStateAction<object>>;
//  }


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
}

export default MoviesContainer
