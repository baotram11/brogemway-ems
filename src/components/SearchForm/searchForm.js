import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchProByName } from '../../store/slices/searchSlice';

const SearchForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [word, setWord] = useState(null);
    const handleSearch = () => {
        dispatch(searchProByName(word));
        return navigate(`/search?q=${word}`);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    };
    return (
        <div>
            <form action='#' className='form-box f-right'>
                <input
                    type={'text'}
                    name='Search'
                    placeholder='Tìm kiếm sản phẩm'
                    onChange={(e) => setWord(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className='search-icon' onClick={handleSearch}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
