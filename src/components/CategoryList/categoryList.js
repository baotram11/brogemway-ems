import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllCategories,
    selectStatusCats,
    fetchCategories,
    selectErrorCats,
} from '../../store/slices/categorySlice';

const CategoryList = () => {
    const dispatch = useDispatch();

    const allCategories = useSelector(selectAllCategories);
    const statusCats = useSelector(selectStatusCats);
    const errorCats = useSelector(selectErrorCats);

    useEffect(() => {
        if (statusCats === 'idle') {
            dispatch(fetchCategories());
        }
    }, [statusCats, dispatch]);

    return (
        <div>
            <div className='list-group h-75'>
                {allCategories.map((category) => (
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`/category/${category.CatID}`}
                        key={category.CatID}
                        className='list-group-item list-group-item-action'
                    >
                        {category.CatName}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
