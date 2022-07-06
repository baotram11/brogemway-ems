import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllProducts,
    selectStatus,
    selectErrorMessage,
    fetchProducts,
} from '../../store/slices/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();

    const allProducts = useSelector(selectAllProducts);
    const status = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        <p>'Loading...'</p>;
    } else if (status === 'succeeded') {
        <p>{status}</p>;
    } else if (status === 'failed') {
        <p>{errorMessage}</p>;
    }

    return (
        <div className='product-list'>
            <div className='row m-5'>
                {allProducts.map((product) => (
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`/products/${product.ProID}`}
                        key={product.ProID}
                        className='col d-flex align-items-stretch'
                    >
                        <div className='card mb-4' style={{ width: '18rem' }}>
                            <img
                                style={{ height: '120%' }}
                                className='item-image card-img-center img-fluid'
                                src={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                alt='...'
                            />

                            <div className='card-footer'>
                                <h4 className='text-truncate align-text-center'>
                                    {product.ProName}
                                </h4>
                                <p className='mb-2 pl-4 text-truncate align-text-center'>
                                    {product.Price}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
