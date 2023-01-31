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
      <h3>{title}</h3>
      <Link to={`/${id}`}>
        <img src={image} id={id} alt={title} onClick={(e) => selectMovie(e)} />
      </Link>
    </div>
  );
};

export default MiniCard;
