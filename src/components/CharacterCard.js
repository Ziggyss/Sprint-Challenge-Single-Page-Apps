import React from "react";

export default function CharacterCard(props) {
  const { name, status, species, image } = props;

  return (
    <div className="characterWrapper">
      <div className="characterCard">
        <img src={image} alt={image} />
        <h1>Name: {name}</h1>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}
