import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/categories/')
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => console.log(err));
    });
    return (
        <div>
            <div class='list-group w-50'>
                {categories.map((category) => (
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`/categogy/${category.CatID}`}
                        key={category.CatID}
                        className='list-group-item list-group-item-action'
                    >
                        {category.CatName}
                        <span class='badge rounded-pill bg-primary float-end'>
                            11
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
