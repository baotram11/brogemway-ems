import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home/home';
import Page404 from '../Pages/404/page404';
import Login from '../Pages/Login/login';
import SignUp from '../Pages/SignUp/signUp';
import AllProducts from '../Pages/AllProducts/allProducts';
import ProductDetail from '../Pages/ProductDetail/productDetail';

const productList = require('../Database/Products.json');

const Router = () => {
	return (
		<Routes>
			<Route path='*' element={<Page404 />} />
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<SignUp />} />
			<Route
				path='/products'
				element={<AllProducts products={productList} />}
			/>
			<Route path='/products/:id' element={<ProductDetail />} />
		</Routes>
	);
};

export default Router;
