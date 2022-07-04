import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../screens/Home/home';
import About from '../screens/About/about';
import Login from '../screens/Login/login';
import Terms from '../screens/Terms/terms';
import Product from '../screens/Product/product';
import Account from '../screens/Account/account';
import Page404 from '../screens/Page404/page404';
import Register from '../screens/Register/register';
import AllProducts from '../screens/AllProducts/allProducts';
import ProductList from '../components/ProductList/productList';

const Router = () => {
    return (
        <Routes>
            <Route path='*' element={<Page404 />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/register' element={<Register />} />
            <Route path='/account' element={<Account />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/categories/:id' element={<ProductList />} />
        </Routes>
    );
};

export default Router;
