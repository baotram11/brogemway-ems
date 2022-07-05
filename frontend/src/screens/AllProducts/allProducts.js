import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllProducts,
    selectStatus,
    selectErrorMessage,
    fetchProducts,
} from '../../store/slices/productSlice';
import ProductList from '../../components/ProductList/productList';

const AllProducts = () => {
    const dispatch = useDispatch();

    const status = useSelector(selectStatus);
    console.log(status);
    const errorMessage = useSelector(selectErrorMessage);
    // const allProducts = useSelector(selectAllProducts);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    let content;
    if (status === 'loading') {
        content = <p>'Loading...'</p>;
    } else if (status === 'succeeded') {
        // console.log('List' + allProducts);
    } else if (status === 'failed') {
        content = <p>{errorMessage}</p>;
    }

    return (
        <div className='all-products'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <h2 className='section-heading text-uppercase text-center mb-3 mt-5'>
                Sản phẩm
            </h2>
            {content}
            {/* {allProducts} */}
            {/* <ProductList props={allProducts} /> */}
        </div>
    );
};

export default AllProducts;
