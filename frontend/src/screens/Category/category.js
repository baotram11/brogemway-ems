import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCatID, selectStatusPros, selectErrorMessage } from '../../store/slices/categorySlice';

import GroupByCat from '../../components/GroupByCat/groupByCat';

const Category = () => {
    const param = useParams();

    const dispatch = useDispatch();
    const status = useSelector(selectStatusPros);
    const errorMessage = useSelector(selectErrorMessage);

    console.log(status);

    useEffect(() => {
        const promise = dispatch(fetchProductsByCatID(param.id));
        return () => {
            promise.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='category-groupBy'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Danh mục &#9702; Brogemway</title>
            </Helmet>

            {status === 'loading' && (
                <div className='spinner-border text-secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            )}
            {status === 'failed' && <h5 style={{ color: 'red' }}>{errorMessage}</h5>}
            {status === 'succeeded' && (
                <div className='container p-5'>
                    <GroupByCat />
                </div>
            )}
        </div>
    );
};

export default Category;
