import { useState, useEffect } from 'react';
import { charactersAPI } from '../services/last-airbender-api';

const useCharacters = (page) => {
  const [characters, setCharacters] = useState([]);


  const fetchCharacters = () => {
    charactersAPI(page)
      .then((res) => {
        setCharacters(res);
      });  
  };

  useEffect(() => {
    fetchCharacters();    
  }, [page]);


  return { characters };
};

export default useCharacters;
