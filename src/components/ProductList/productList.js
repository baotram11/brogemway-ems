import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyConverter } from '../../utils/currencyConverter';

const ProductList = (props) => {
    const { catId, status, allProducts, errorMessage } = props;
    return (
        <div className='new-arrival new-arrival3'>
            {status === 'loading' && (
                <div className='spinner-border text-secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            )}
            {status === 'failed' && <h5 style={{ color: 'red' }}>Không tìm thấy sản phẩm phù hợp.</h5>}
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
                                        <Link key={product.ProID} className='link' to={`/products/${product.ProID}`}>
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
                <div className='row justify-content-md-center pt-3'>
                    <div className='room-btn mt-20'>
                        {catId === 0 ? (
                            <Link to='#' className='link border-btn' style={{ textDecoration: 'none' }}>
                                Xem thêm
                            </Link>
                        ) : (
                            <Link
                                to={`/category/${catId}`}
                                className='link border-btn'
                                style={{ textDecoration: 'none' }}
                            >
                                Xem thêm
                            </Link>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProductList;
