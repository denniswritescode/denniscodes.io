import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home';
import SocialIcons from './Shared/SocialIcons/SocialIcons';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <SocialIcons />
      </div>
    </Router>
  );
}

export default App;
