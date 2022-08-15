import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectStatus,
    selectErrorMessage,
    fetchProductByID,
    selectProduct,
} from '../../store/slices/productSlice';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import ProductDetail from '../../components/ProductDetail/productDetail';

const Product = () => {
    const param = useParams();
    const dispatch = useDispatch();

    const status = useSelector(selectStatus);
    const product = useSelector(selectProduct);
    const errorMessage = useSelector(selectErrorMessage);
    const clag = useRef(null);

    useEffect(() => {
        console.log(clag);
        console.log(param.id);
        if (status === 'idle' || clag.current !== param.id) {
            dispatch(fetchProductByID(param.id));
        }
        clag.current = param.id;
        console.log(product[0]);
    }, [status, dispatch, param.id, product]);

    return (
        <div className='product-screen'>
            <Helmet>
                <meta charSet='utf-8' />

                {product.length > 0 ? (
                    <title> {product[0].ProName} &#9702; Brogemway</title>
                ) : (
                    <title>{param.id} &#9702; Brogemway</title>
                )}
            </Helmet>
            <Header />

            {status === 'loading' && (
                <div className='spinner-border text-secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            )}
            {status === 'failed' && (
                <h5 style={{ color: 'red' }}>{errorMessage}</h5>
            )}
            {status === 'succeeded' && <ProductDetail {...product[0]} />}
            <Footer />
        </div>
    );
};

export default Product;
