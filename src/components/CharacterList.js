import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const rickMortyApi = 'https://rick-api.herokuapp.com/api/';

  useEffect(() => {
    Axios.get(rickMortyApi)
      .then(response => {
        debugger
        console.log(response);
        setCharacters(response.data);
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
