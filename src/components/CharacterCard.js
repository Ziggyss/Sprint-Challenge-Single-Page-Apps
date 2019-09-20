import React from "react";

export default function CharacterCard(props) {
  const {id, name, status, species, type, gender, origin, location, image} = props;


  return (
  <div className="characterWrapper">  
    <div className="characterCard">
    <img src={image} alt={image}/>
    <h1>Name: {name}</h1>
    <p>Species: {species}</p>
  </div>



  </div>
  );
}
