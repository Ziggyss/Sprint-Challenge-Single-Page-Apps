import React from "react";
import CharacterCard from "./CharacterCard";
/* import SearchForm from "./SearchForm"; */

export default function CharacterList(props) {
  const { characterList } = props;
  return (
    <div>
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
