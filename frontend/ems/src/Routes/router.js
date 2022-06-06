import React from "react";
import { Route, Routes } from "react-router-dom";

import Home     from '../Pages/home';
import Warning  from '../Pages/404';
import Product  from '../Pages/Category/product';
import Category from '../Pages/Category/category';
import Login    from '../Pages/SignUp_Login/login';
import SignUp   from '../Pages/SignUp_Login/signUp';


const Router = () => {
    return (
        <Routes>
            <Route path="/"       element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/signup" element={<SignUp />} />   
            <Route path="/err"    element={<Warning />} />  
            <Route path="/infoProduct/:id" element={<Product />} />
            <Route path="/products" element={<Category />} />                    
        </Routes>
    );
};

export default Router;
