import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ subhead }) => {
  const location = useLocation();
  return (
    <header>
      <div className={styles.Headlines}>
        <h1>Avatar: The Last Airbender</h1>
        <h2>{subhead}</h2>
      </div>
      <div className={styles.Nav}>
        <Link className={location.pathname === '/' ? styles.hidden : ''} to={'/'}>Home</Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  subhead: PropTypes.string.isRequired
};

export default Header;

