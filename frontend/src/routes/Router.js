import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Account from '../screens/Account';
import Page404 from '../screens/Page404';
import Register from '../screens/Register';
import AllProducts from '../screens/AllProducts';

const Router = () => {
    return (
        <Routes>
            <Route path='*' element={<Page404 />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/account' element={<Account />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/products/:id' element={<Product />} />
        </Routes>
    );
};

export default Router;
