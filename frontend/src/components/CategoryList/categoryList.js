import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllCategories,
    selectStatus,
    selectErrorMessage,
    fetchCategories,
} from '../../store/slices/categorySlice';

const CategoryList = () => {
    const dispatch = useDispatch();

    const allCategories = useSelector(selectAllCategories);
    const status = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        <p>'Loading...'</p>;
    } else if (status === 'failed') {
        <p>{errorMessage}</p>;
    }
    
    return (
        <div>
            <div className='list-group w-50'>
                {allCategories.map((category) => (
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`/categogy/${category.CatID}`}
                        key={category.CatID}
                        className='list-group-item list-group-item-action'
                    >
                        {category.CatName}
                        <span className='badge rounded-pill bg-primary float-end'>
                            11
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
