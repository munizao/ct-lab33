import React from 'react';
import useCharacters from '../hooks/use-characters';
import { Link } from 'react-router-dom';

const Home = () => {
  const { characters,  } = useCharacters();

  return (
    <div>
      <p>Character List:</p>
      <ul>
        {characters.map((character) => <li key={character._id}><Link to={`/${character._id}`}>{character.name}</Link></li>)}
      </ul>
    </div>
  );
};

export default Home;
