import React from 'react';
import { Helmet } from 'react-helmet';
import ProductList from '../../components/ProductList/productList';
import CategoryList from '../../components/CategoryList/categoryList';

const AllProducts = () => {
    return (
        <div className='all-products pt-5'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <div className='row pt-5'>
                <div className='col-auto pt-5'>
                    <CategoryList />
                </div>
                <div className='col'>
                    <h2 className='section-heading text-uppercase text-center mb-5'>Sản phẩm</h2>
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
