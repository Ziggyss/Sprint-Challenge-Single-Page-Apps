import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const rickMortyApi = 'https://rickandmortyapi.com/api/character/';

  useEffect(() => {
    Axios.get(rickMortyApi)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Server Error", error);
      });
  });

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        );
      })}
    </section>
  );
}
