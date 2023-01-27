import React from "react";

interface Props {
title: string;
id: string;
image: string;
}
const MiniCard: React.FC<Props> = ({title, id, image}) => {
console.log(id);

  return <div>
    <h3>{title}</h3>
    <img src={image} id={id} alt={title}/>

  </div>;
};

export default MiniCard;
