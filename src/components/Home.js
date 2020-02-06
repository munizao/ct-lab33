import React from 'react';
import styles from './Home.css';
import commonStyles from '../style/common.css'
import useCharacters from '../hooks/use-characters';
import { Link } from 'react-router-dom';

const Home = () => {
  const { characters, page, prevPage, nextPage } = useCharacters();

  return (
    <>
      <header><h1>Character List:</h1></header>
      <main>
        <div className={styles.Main}>
          <ul>
            {characters.map((character) => <li key={character._id}><Link to={`/details/${character._id}`}>{character.name}</Link></li>)}
          </ul>
          <span onClick={prevPage} className={commonStyles.Buttonish}>Previous</span><span onClick={nextPage} className={commonStyles.Buttonish}>next</span>
        </div>
      </main>
    </>
  );
};

export default Home;
