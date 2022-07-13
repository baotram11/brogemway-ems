import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../utils/scrollToTop';

import Home from '../screens/Home/home';
import About from '../screens/About/about';
import Login from '../screens/Login/login';
import Terms from '../screens/Terms/terms';
import Product from '../screens/Product/product';
import Admin from '../screens/Admin/admin';
import Page404 from '../screens/Page404/page404';
import Register from '../screens/Register/register';
import AllProducts from '../screens/AllProducts/allProducts';
import Category from '../screens/Category/category';

const Router = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path='*' element={<Page404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/register' element={<Register />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/products/:id' element={<Product />} />
                <Route path='/category/:id' element={<Category />} />
            </Routes>
        </ScrollToTop>
    );
};

export default Router;
