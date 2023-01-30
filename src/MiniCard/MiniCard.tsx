import React from "react";
import { Link } from "react-router-dom";
import "./MiniCard.css";

interface Props {
  title: string;
  id: string;
  image: string;
  selectMovie: React.Dispatch<React.SetStateAction<object>>;
}

const MiniCard: React.FC<Props> = ({ title, id, image, selectMovie }) => {
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
