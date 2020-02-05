import React from 'react';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/details/:charId" component={Details} />
    </Router>
  );
}
