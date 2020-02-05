import { useState, useEffect } from 'react';
import usePaging from './use-paging';
import { charactersAPI } from '../services/last-airbender-api';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const { page, prevPage, nextPage } = usePaging();

  const fetchCharacters = () => {
    charactersAPI(page)
      .then((res) => {
        setCharacters(res);
      });  
  };

  useEffect(() => {
    fetchCharacters();    
  }, [page]);


  return { characters, page, prevPage, nextPage };
};

export default useCharacters;
