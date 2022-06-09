import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './Assets/Styles/styles.css';

import Router from './Routes/router';

const App = () => { 
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
