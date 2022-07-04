import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/slices/productSlice';
import ProductList from '../../components/ProductList/productList';

const AllProducts = () => {
    const products = useSelector(selectProducts);
    console.log(products);
    return (
        <div className='all-products'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <h2 className='section-heading text-uppercase text-center mb-3 mt-5'>
                Sản phẩm
            </h2>
            {/* <ProductList props={products} /> */}
        </div>
    );
};

export default AllProducts;
