import React from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  const { characterList } = props;

  return (
    <div>
      {/* <SearchForm /> */}
      <h2>Characters</h2>
      {characterList.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
        />
      ))}
    </div>
  );
}
