import { Link } from 'react-router-dom';
import React from 'react';
import AccountManager from '../../components/AccountManager/accountManager';
import CategoryList from '../../components/CategoryList/categoryList';

const Admin = () => {
    return (
        <div className='admin'>
            <div className='row pt-5'>
                <div className='col-md-auto pr-5'>
                    <div className='list-group text-center'>
                        <Link to='#' className='list-group-item'>
                            <p>Quản lý sản phẩm</p>
                        </Link>
                        <Link to='#' className='list-group-item'>
                            <p>Quản lý danh mục</p>
                        </Link>
                        <Link to='#' className='list-group-item'>
                            <p>Quản lý người dùng</p>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <AccountManager />
                </div>
            </div>
            <div className='row pt-5'>
                <CategoryList />
            </div>
        </div>
    );
};

export default Admin;
