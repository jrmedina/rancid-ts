import React from "react";
import "./MiniCard.css"

interface Props {
  title: string;
  id: string;
  image: string;
}

const MiniCard: React.FC<Props> = ({ title, id, image }) => {
  return (
    <div className="mini-card" 
    >
      <h3>{title}</h3>
      <img src={image} id={id} alt={title} />
    </div>
  );
};

export default MiniCard;
