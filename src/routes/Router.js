import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import SearchResults from '../screens/SearchResults/searchResults';
import Contact from '../screens/Contact/contact';
import Page403 from '../screens/Page403/page403';
import User from '../screens/User/user';
import ForgotPassword from '../screens/ForgotPassword/forgotPassword';
import Cart from '../screens/Cart/cart';
import Checkout from '../screens/Checkout/checkout';

const Router = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path='*' element={<Page404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/403' element={<Page403 />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/term' element={<Terms />} />
                <Route path='/about' element={<About />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/search' element={<SearchResults />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/register' element={<Register />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/account/:id' element={<User />} />
                <Route path='/products/:id' element={<Product />} />
                <Route path='/category/:id' element={<Category />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
        </ScrollToTop>
    );
};

export default Router;
