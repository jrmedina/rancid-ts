import React from "react";
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
      <img src={image} id={id} alt={title} onClick={(e) =>selectMovie(e)}/>
    </div>
  )
}

export default MiniCard
