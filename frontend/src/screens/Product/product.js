import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectErrorMessage, fetchProductByID } from '../../store/slices/productSlice';

import ProductDetail from '../../components/ProductDetail/productDetail';

const Product = () => {
    const param = useParams();
    const dispatch = useDispatch();

    const status = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        const promise = dispatch(fetchProductByID(param.id));
        return () => {
            promise.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='product-screen'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{param.id} &#9702; Brogemway</title>
            </Helmet>

            {status === 'loading' && (
                <div className='spinner-border text-secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            )}
            {status === 'failed' && <h5 style={{ color: 'red' }}>{errorMessage}</h5>}
            {status === 'succeeded' && <ProductDetail />}
        </div>
    );
};

export default Product;
