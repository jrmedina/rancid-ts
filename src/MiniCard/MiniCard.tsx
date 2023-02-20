import React from "react";
import { Link } from "react-router-dom";
import { MiniCardProps } from "../resources/model";
import "./MiniCard.css";

const MiniCard: React.FC<MiniCardProps> = ({
  title,
  id,
  image,
  selectMovie,
}) => {
  return (
    <div className="mini-card">
      <Link to={`/${id}`}>
        <img src={image} id={id} alt={title} onClick={(e) => selectMovie(e)} />
      </Link>
      <h4>{title}</h4>
    </div>
  );
};

export default MiniCard;
