import React from 'react';
import { Helmet } from 'react-helmet';
import NavSlider from '../../components/NavSlider/navSlider';
import ProductList from '../../components/ProductList/productList';
import Header from '../../navigations/Header/header';

const AllProducts = () => {
    const breadcrumb = { title: 'Sản phẩm', parentTitle: null };

    return (
        <div className='all-products'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <Header />
            
            <NavSlider {...breadcrumb} />
        </div>
    );
};

export default AllProducts;
