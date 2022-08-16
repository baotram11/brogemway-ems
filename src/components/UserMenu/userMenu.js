import Cookies from 'js-cookie';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { logout } from '../../store/slices/authSlice';

const UserMenu = (props) => {
    const user = props;
    const dispatch = useDispatch();

    const { setAuthToken, setUserId, setUserName } = useContext(AuthContext);
    const handleLogout = () => {
        dispatch(logout());
        setAuthToken(null);
        Cookies.remove('token');
        setUserId(null);
        Cookies.remove('userId');
        setUserName(null);
        Cookies.remove('userName');
    };
    return (
        <ul className='submenu'>
            {user.account.Level === 'admin' ? (
                <li key={'1'}>
                    <Link
                        className='link'
                        style={{ textDecoration: 'none' }}
                        to={`/admin`}
                        key={user.account.ID}
                    >
                        Quản lý dữ liệu
                    </Link>
                </li>
            ) : (
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
            )}

            {user.account.Level === 'admin' ? (
                <li key={'2'}>
                    <Link
                        className='link'
                        style={{ textDecoration: 'none' }}
                        to={`/admin`}
                        key={user.account.ID}
                    >
                        Thống kê doanh thu
                    </Link>
                </li>
            ) : (
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
            )}
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
