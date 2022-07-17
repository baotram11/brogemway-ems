import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllCategories,
    selectStatusCats,
    selectErrorMessage,
    fetchCategories,
} from '../../store/slices/categorySlice';

const Submenu = () => {
    const dispatch = useDispatch();

    const allCategories = useSelector(selectAllCategories);
    const statusCats = useSelector(selectStatusCats);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (statusCats === 'idle') {
            dispatch(fetchCategories());
        }
    }, [statusCats, dispatch]);

    return (
        <div className='submenu-area'>
            {statusCats === 'loading' && (
                <div className='spinner-border text-secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            )}
            {statusCats === 'failed' && <h5 style={{ color: 'red' }}>{errorMessage}</h5>}
            {statusCats === 'succeeded' && (
                <ul className='submenu'>
                    {allCategories.map((category) => (
                        <li>
                            <Link to={`/category/${category.CatID}`} key={category.CatID}>
                                {category.CatName}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Submenu;
