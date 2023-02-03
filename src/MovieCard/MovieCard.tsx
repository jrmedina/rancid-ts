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
 const hours = Math.floor(movie.runtime / 60);
 const minutes = movie.runtime % 60;
  return (
    <>
      {movie && (
        <div className="MovieCard">
          <h3 className="title">{movie.title}</h3>
          <p>Rating: {movie.average_rating} / 10</p>
          <p>Runtime: {hours}h {minutes}m</p>
          <p>Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
          <p>Budget: {movie.budget} million</p>
          <p>{movie.overview}</p>
          <p>Genres: {movie.genres.join(", ")}</p>
          <p>Revenue: {movie.revenue.toLocaleString()}</p>
          <p>{movie.tagline}</p>

          <img className="poster" src={movie.backdrop_path} alt={movie.title} />
        </div>
      )}
    </>
  );
};

export default MovieCard;
