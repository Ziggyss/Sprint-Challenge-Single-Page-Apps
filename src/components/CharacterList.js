import React from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export default function CharacterList(props) {
  const { characterList, onSearch, searchTerm } = props;
  return (
    <div>
      <SearchForm onSearch={onSearch} searchTerm={searchTerm} />
      <Title>Characters</Title>
      <StyledCards>
        {characterList.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            gender={character.gender}
            origin={character.origin.name}
          />
        ))}
      </StyledCards>
    </div>
  );
}
