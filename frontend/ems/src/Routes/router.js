import React from "react";
import { Route, Routes } from "react-router-dom";

import Home     from '../Pages/home';
import Warning  from '../Pages/404';
import Login    from '../Pages/SignUp_Login/login';
import SignUp   from '../Pages/SignUp_Login/signUp';
import ProductList from '../Pages/Category/productList';
import ProductDetail from '../Pages/Category/productDetail';

const productList = require('../Database/Products.json');

const Router = () => {
    return (
        <Routes>
            <Route path="/"                 element={<Home              />} />
            <Route path="/login"            element={<Login             />} />
            <Route path="/signup"           element={<SignUp            />} />   
            <Route path="/err"              element={<Warning           />} />  
            <Route path="/products"         element={<ProductList products={productList} />} />
            <Route path="/infoProduct:id"  element={<ProductDetail    />} />                    
        </Routes>
    );
};

export default Router;
