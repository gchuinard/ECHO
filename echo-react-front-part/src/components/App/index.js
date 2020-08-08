/**
 * Imports de dépendances
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from 'src/routes.js';

// Composants React

import Nav from 'src/components/Nav';

/**
 * Code
 */

const App = () => {
  return <div id="app">

    <Router>
      <Nav/>
      <Routing/>
    </Router>
    
</div>;
}

/**
 * Export
 */
export default App;
