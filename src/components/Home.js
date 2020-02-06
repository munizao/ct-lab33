import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';
import commonStyles from '../style/common.css';
import useCharacters from '../hooks/use-characters';
import { Link } from 'react-router-dom';
import Header from './Header';


const Home = ({ page, prevPage, nextPage }) => {
  const { characters } = useCharacters(page);

  return (
    <>
      <Header subhead={'Character List'}/>
      <main>
        <ul>
          {characters.map((character) => <li key={character._id}><Link to={`/details/${character._id}`}>{character.name}</Link></li>)}
        </ul>
        <div className={styles.PageBar}>
          <span onClick={prevPage} className={commonStyles.Buttonish}>Previous</span>
          <span>Page: {page}</span>
          <span onClick={nextPage} className={commonStyles.Buttonish}>Next</span>
        </div>
      </main>
    </>
  );
};

Home.propTypes = {
  page: PropTypes.number.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired
};

export default Home;
