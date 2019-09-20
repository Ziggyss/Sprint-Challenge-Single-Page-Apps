import React from "react";
import styled from "styled-components";

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  box-shadow: 0px 0px 22px 9px rgba(87, 81, 87, 0.65);
  padding: 50px;
  margin: 50px;
`;

export default function WelcomePage() {
  return (
    <StyledWelcome>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </StyledWelcome>
  );
}
