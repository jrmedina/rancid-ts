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
  console.log(new Date(movie.release_date).toLocaleDateString());

  return (
    <>
      {movie && (
        <div className="MovieCard">
          <h3 className="title">{movie.title}</h3>
          <p>{movie.average_rating}</p>
          <p>{movie.runtime}</p>
          <p>{new Date(movie.release_date).toLocaleDateString()}</p>
          <p>{movie.budget}</p>
          <p>{movie.overview}</p>
          <p>{movie.genres}</p>
          <p>{movie.revenue}</p>
          <p>{movie.tagline}</p>

          <img className="poster" src={movie.backdrop_path} alt={movie.title} />
        </div>
      )}
    </>
  );
};

export default MovieCard;
