import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/style.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Router from './routes/Router';
import Header from './navigations/Header/Header';
import Footer from './navigations/Footer/footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
