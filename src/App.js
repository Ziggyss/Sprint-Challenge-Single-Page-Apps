import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Nav from "./components/Nav";

const rickMortyApi = "https://rickandmortyapi.com/api/character/";

export default function App() {
  const [characterData, setCharacterData] = useState();

  useEffect(() => {
    Axios.get(rickMortyApi)
      .then(response => {
        console.log(response);
        setCharacterData(response.data.results);
      })
      .catch(error => {
        console.log("Server Error", error);
      });
  }, []);

  if (characterData) {
    return (
      <main>
        <Header />
        <Nav />
        <Route exact path="/" component={WelcomePage} />
        <Route
          exact
          path="/characters"
          render={() => <CharacterList characterList={characterData} />}
        />
        <Route exact path="/search" /* component={SearchForm} */ />
      </main>
    );
  }
  return (
    <div>
      <h4>Please wait.... we're working on getting your info.</h4>
    </div>
  );
}
