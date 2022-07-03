import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='account'>
            <div className='row'>
                <div className='col-4'>
                    <div className='list-group text-center'>
                        <Link to='/products' className='list-group-item'>
                            <p>Quản lý sản phẩm</p>
                        </Link>
                        <Link to='/categories' className='list-group-item'>
                            <p>Quản lý danh mục</p>
                        </Link>
                        <Link to='/accounts' className='list-group-item'>
                            <p>Quản lý người dùng</p>
                        </Link>
                    </div>
                </div>
                <div className='col-8'></div>
            </div>
        </div>
    );
};

export default Account;
