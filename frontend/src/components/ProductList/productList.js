import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyConverter } from '../../utils/CurrencyConverter';
import {
    selectAllProducts,
    selectStatusList,
    selectErrorMessage,
    fetchProducts,
} from '../../store/slices/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();

    const allProducts = useSelector(selectAllProducts);
    const status = useSelector(selectStatusList);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    return (
        <div className='new-arrival new-arrival3'>
            {status === 'loading' && (
                <div className='spinner-border text-secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            )}
            {status === 'failed' && <h5 style={{ color: 'red' }}>{errorMessage}</h5>}
            {status === 'succeeded' && (
                <div className='row'>
                    {allProducts.map((product) => (
                        <div key={product.ProID} className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                            <div className='single-new-arrival mb-50 text-center'>
                                <div className='popular-img'>
                                    <img
                                        src={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                        alt='...'
                                    />
                                </div>
                                <div className='popular-caption'>
                                    <h3>
                                        <Link
                                            key={product.ProID}
                                            className='link'
                                            to={`/products/${product.ProID}`}
                                        >
                                            {product.ProName}
                                        </Link>
                                    </h3>
                                    <span>{CurrencyConverter(product.Price)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {allProducts ? (
                <div className='row justify-content-center'>
                    <div className='room-btn mt-20'>
                        <Link to='/products' className='link border-btn' style={{ textDecoration: 'none' }}>
                            Xem thêm
                        </Link>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProductList;
