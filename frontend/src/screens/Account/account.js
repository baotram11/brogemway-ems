import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../store/slices/userSlice';

const Account = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    // Navigate to login page if user is not exists
    if (!user) {
        return <Link to='/login' />;
    }
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
                <div className='col-8'>
                    <h2>
                        Welcome {user.firstName} {user.lastName}
                    </h2>
                    <Link to='#' onClick={handleLogout}>
                        Log out
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Account;
