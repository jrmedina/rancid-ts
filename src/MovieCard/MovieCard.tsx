import React from "react";
import "./MovieCard.css";

interface MovieCardProps {
  movie: {
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
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  console.log(movie);
  
  return (
    <>
      {movie && (
        <div className="MovieCard">
          <h3 className="title">{movie.title}</h3>
          <p>{movie.average_rating}</p>
          <p>{movie.release_date}</p>
          <img className="poster" src={movie.backdrop_path} alt={movie.title} />
        </div>
      )}
    </>
  );
};

export default MovieCard;
