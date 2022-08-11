import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {
    fetchProductsByCatID,
    selectAllCategories,
    selectErrorPros,
    selectProducts,
    selectStatusCats,
    selectStatusPros,
} from '../../store/slices/categorySlice';
import ProductList from '../ProductList/productList';

const PopularProducts = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector(selectAllCategories);

    const products = useSelector(selectProducts);
    const status = useSelector(selectStatusPros);
    const errorMessage = useSelector(selectErrorPros);

    const [key, setKey] = useState(null);
    const [show, setShow] = useState(false);
    const [allProducts, setAllProducts] = useState(null);
    const [listTop3, setListTop3] = useState([]);
    const handleFetchProductsByCatId = (k) => {
        console.log(k);
        setKey(k);
        dispatch(fetchProductsByCatID(k));
        if (products) {
            setAllProducts(products.slice(0, 3));
            setShow(true);
            console.log(show);
        }
    };
    async function fetchTop3() {
        if (!key && allCategories) {
            for (let i = 0; i < allCategories.length; i++) {
                console.log('here' + i);

                dispatch(fetchProductsByCatID(i + 1));
                setListTop3([...listTop3.slice(i, 1, products.slice(0, 3))]);
                console.log(listTop3);
            }
        }
    }
    useEffect(() => {
        fetchTop3();
        console.log(listTop3);
    }, []);
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
                            <p>
                                Những sản phẩm được yêu thích và lựa chọn nhiều
                                nhất!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='properties__button text-center'>
                            <Tabs
                                defaultActiveKey={5}
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
                                            <ProductList
                                                {...{
                                                    status,
                                                    allProducts,
                                                    errorMessage,
                                                }}
                                            />
                                        ) : (
                                            <p>Chưa có sản phẩm nổi bật</p>
                                        )}
                                    </Tab>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
