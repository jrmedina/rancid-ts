import React from "react";
import { Link } from "react-router-dom";
import { MovieCardProps } from "../resources/model";
import "./MovieCard.css";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  return (
    <>
      {movie && (
        <div className="MovieCard">
          <Link to={"/"}>
            <button type="button" className="home-button">
              GO BACK
            </button>
          </Link>
          <h3 className="title">{movie.title}</h3>
          <p>Rating: {movie.average_rating} / 10</p>
          <p>
            Runtime: {hours}h {minutes}m
          </p>
          <p>
            Release Date: {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p>Budget: {movie.budget.toLocaleString()} million</p>
          <p>Genres: {movie.genres.join(", ")}</p>
          <p>Revenue: ${movie.revenue.toLocaleString()}</p>
          <p>{movie.tagline}</p>
          <img className="poster" src={movie.backdrop_path} alt={movie.title} />
          <p>{movie.overview}</p>
        </div>
      )}
    </>
  );
};

export default MovieCard;
