import React from 'react';
import Home from './Home';
import Details from './Details';
import usePaging from '../hooks/use-paging';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

export default function App() {
  const pagingProps = usePaging();
  return (
    <Router>
      <Route exact path="/" render={() => <Home {...pagingProps} />} />
      <Route path="/details/:charId" component={Details} />
    </Router>
  );
}
