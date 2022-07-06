import { Link } from 'react-router-dom';
import React from 'react';
import AccountList from '../../components/AccountList/accountList';
import CategoryList from '../../components/CategoryList/categoryList';

const Account = () => {
    return (
        <div className='account'>
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
                    <AccountList />
                </div>
            </div>
            <div className='row pt-5'>
                <CategoryList />
            </div>
        </div>
    );
};

export default Account;
