import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from '../Pages/home';
import Product from '../Pages/Category/product';
import Login from '../Pages/SignUp_Login/login';
import SignUp from '../Pages/SignUp_Login/signUp';
import Warning from '../Pages/404';

const Router = () => {
    return (
        <Routes>
            <Route path="/"       element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/signup" element={<SignUp />} />   
            <Route path="/err"    element={<Warning />} />  
            <Route path="/infoProduct/:id" element={<Product />} />             
        </Routes>
    );
};

export default Router;
