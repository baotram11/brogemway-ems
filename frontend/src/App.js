import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/style.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Router from './routes/Router';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

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
