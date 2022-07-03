import React from 'react';
import { Helmet } from 'react-helmet';

import ProductList from '../../components/ProductList';

const AllProducts = () => {
    return (
        <div className='allproducts'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <h2 className='section-heading text-uppercase text-center mb-3 mt-5'>
                Sản phẩm
            </h2>
            <ProductList />
        </div>
    );
};

export default AllProducts;
