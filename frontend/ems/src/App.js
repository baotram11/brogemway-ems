import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './Assets/Styles/style.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Router from './Routes/router';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;
