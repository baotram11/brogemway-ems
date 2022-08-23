import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchProductsByCatID,
    selectStatusPros,
    selectErrorCats,
    selectProducts,
    selectErrorPros,
} from '../../store/slices/categorySlice';

import GroupByCat from '../../components/GroupByCat/groupByCat';
import Footer from '../../navigations/Footer/footer';
// import NavSlider from '../../components/NavSlider/navSlider';
import Header from '../../navigations/Header/header';

const Category = () => {
    const param = useParams();
    const catId = param.id;
    const dispatch = useDispatch();
    const errorCats = useSelector(selectErrorCats);

    const status = useSelector(selectStatusPros);
    const allProducts = useSelector(selectProducts);
    const errorMessage = useSelector(selectErrorPros);

    const clag = useRef(null);

    useEffect(() => {
        console.log(clag);
        console.log(param.id);
        if (status === 'idle' || clag.current !== param.id) {
            dispatch(fetchProductsByCatID(param.id));
        }
        clag.current = param.id;
    }, [param.id, status, dispatch, allProducts]);

    return (
        <div className='category-groupBy'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Danh mục &#9702; Brogemway</title>
            </Helmet>

            <Header />

            {status === 'loading' && (
                <div className='spinner-border text-secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            )}
            {status === 'failed' && (
                <h5 style={{ color: 'red' }}>{errorCats}</h5>
            )}
            {status === 'succeeded' && (
                    <GroupByCat
                        {...{ catId, status, allProducts, errorMessage }}
                    />
            )}

            <Footer />
        </div>
    );
};

export default Category;
