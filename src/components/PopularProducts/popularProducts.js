import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {
    fetchProductsByCatID,
    selectAllCategories,
    selectErrorPros,
    selectProducts,
    selectStatusPros,
} from '../../store/slices/categorySlice';
import ProductList from '../ProductList/productList';
import { CurrencyConverter } from '../../utils/currencyConverter';

const PopularProducts = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector(selectAllCategories);

    const products = useSelector(selectProducts);
    const status = useSelector(selectStatusPros);
    const errorMessage = useSelector(selectErrorPros);

    const [catId, setCatId] = useState(1);
    const [show, setShow] = useState(false);
    const [allProducts, setAllProducts] = useState(null);
    const [init, setInit] = useState(true);

    const handleFetchProductsByCatId = (k) => {
        setCatId(k);
        dispatch(fetchProductsByCatID(k));
        if (products) {
            setAllProducts(products.slice(0, 4));
            setShow(true);
        }
    };

    useEffect(() => {
        if (status === 'idle' || init) {
            dispatch(fetchProductsByCatID(catId));
            setInit(false);
        }
    }, [dispatch, catId, allProducts, products, status, init]);

    useEffect(() => {
        if (products) {
            let index = Math.floor(Math.random() * (products.length - 4));
            setAllProducts(products.slice(index, index + 4));
            setShow(true);
        }
    }, [products]);

    return (
        <section className='properties new-arrival fix'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-7 col-lg-8 col-md-10'>
                        <div
                            className='section-tittle mb-60 text-center wow fadeInUp'
                            data-wow-duration='1s'
                            data-wow-delay='.2s'
                            style={{
                                visibility: 'visible',
                                animationDuration: '1s',
                                animationDelay: '0.2s',
                                animationName: 'fadeInUp',
                            }}
                        >
                            <h2>Sản phẩm nổi bật</h2>
                            <p>Những sản phẩm được yêu thích và lựa chọn nhiều nhất!</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='properties__button text-center'>
                            <Tabs
                                defaultActiveKey={catId}
                                onSelect={handleFetchProductsByCatId}
                                id='uncontrolled-tab-example'
                                className='nav nav-tabs'
                            >
                                {allCategories.map((category) => (
                                    <Tab
                                        transition={true}
                                        className='nav-item nav-link'
                                        key={category.CatID}
                                        eventKey={category.CatID}
                                        title={category.CatName}
                                    >
                                        {show ? (
                                            // <ProductList
                                            // 	{...{
                                            // 		catId,
                                            // 		status,
                                            // 		allProducts,
                                            // 		errorMessage,
                                            // 	}}
                                            // />
                                            <div className='row'>
                                                {allProducts.map((product) => (
                                                    <div key={product.ProID} className='col'>
                                                        <div className='single-new-arrival mb-50 text-center'>
                                                            <div className='popular-img'>
                                                                <img
                                                                    src={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                                                    alt='...'
                                                                />
                                                            </div>
                                                            <div className='popular-caption'>
                                                                <h3 style={{ height: '2.15em' }}>
                                                                    <Link
                                                                        key={product.ProID}
                                                                        className='link'
                                                                        to={`/products/${product.ProID}`}
                                                                    >
                                                                        {product.ProName}
                                                                    </Link>
                                                                </h3>
                                                                <span style={{ fontWeight: '600' }}>
                                                                    {CurrencyConverter(product.Price)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>Chưa có sản phẩm nổi bật</p>
                                        )}
                                    </Tab>
                                ))}
                            </Tabs>
                        </div>
                        {allProducts ? (
                            <div className='row text-center'>
                                <div className='room-btn mt-20'>
                                    {catId === 0 ? (
                                        <Link
                                            to='/products'
                                            className='link border-btn'
                                            style={{ textDecoration: 'none' }}
                                        >
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
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
