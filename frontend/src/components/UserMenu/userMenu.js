import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser, logout } from '../../store/slices/authSlice';

const UserMenu = () => {
    const dispatch = useDispatch();

    const user = useSelector(selectCurrentUser);
    console.log(user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <ul className='submenu'>
            <li key={'1'}>
                <Link
                    className='link'
                    style={{ textDecoration: 'none' }}
                    to={`/account/${user.account.ID}`}
                    key={user.account.ID}
                >
                    Thông tin cá nhân
                </Link>
            </li>
            <li key={'2'}>
                <Link
                    className='link'
                    style={{ textDecoration: 'none' }}
                    to={`/account/${user.account.ID}`}
                    key={user.account.ID}
                >
                    Sản phẩm yêu thích
                </Link>
            </li>
            <li key={'3'}>
                <Link
                    className='link'
                    style={{ textDecoration: 'none' }}
                    key={user.account.ID}
                    to='#'
                    onClick={handleLogout}
                >
                    Đăng xuất
                </Link>
            </li>
        </ul>
    );
};

export default UserMenu;
