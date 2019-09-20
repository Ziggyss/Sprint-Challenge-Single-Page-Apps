import React, { useState, useEffect } from 'react';
import { BrowswerRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

const rickMortyApi = 'https://rickandmorty.api.com/api/character';

export default function App(){
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
  });
}, 
