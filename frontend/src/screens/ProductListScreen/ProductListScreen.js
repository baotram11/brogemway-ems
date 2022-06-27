import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// import './ProductListScreen.scss';

// const products = require('../../database/Products.json');

const ProductListScreen = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/products/')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className='productlist-screen text-center'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <h2 className='section-heading text-uppercase mb-3 mt-5'>
                Sản phẩm
            </h2>

            <div className='row m-5'>
                {products.map((product) => (
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

export default ProductListScreen;
