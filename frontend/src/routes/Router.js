import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen/NotFoundScreen';
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';

const Router = () => {
	return (
		<Routes>
			<Route path='*' element={<NotFoundScreen />} />
			<Route path='/' element={<HomeScreen />} />
			<Route path='/login' element={<LoginScreen />} />
			<Route path='/register' element={<RegisterScreen />} />
			<Route path='/products' element={<ProductListScreen />} />
			<Route path='/products/:id' element={<ProductScreen />} />
		</Routes>
	);
};

export default Router;
