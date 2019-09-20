import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/search" component={SearchForm} />
    </main>
  );
}
