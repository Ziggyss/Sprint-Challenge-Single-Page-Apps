import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export default function CharacterCard(props) {
  const { name, status, species, image, gender, origin } = props;

  return (
    <StyledCard>
      <div className="characterCard">
        <img src={image} alt={image} />
        <h1>Name: {name}</h1>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
      </div>
    </StyledCard>
  );
}
