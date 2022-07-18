import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllCategories,
    selectStatusCats,
    // selectErrorMessage,
    fetchCategories,
} from '../../store/slices/categorySlice';

const Submenu = () => {
    const dispatch = useDispatch();

    const allCategories = useSelector(selectAllCategories);
    const statusCats = useSelector(selectStatusCats);
    // const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (statusCats === 'idle') {
            dispatch(fetchCategories());
        }
    }, [statusCats, dispatch]);

    return (
        <ul className='submenu'>
            {allCategories.map((category) => (
                <li key={category.CatID}>
                    <Link
                        className='link'
                        style={{ textDecoration: 'none' }}
                        to={`/category/${category.CatID}`}
                        key={category.CatID}
                    >
                        {category.CatName}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Submenu;
