import React from 'react';
import { Link } from 'react-router-dom';
import Submenu from '../../components/Submenu/submenu';

const Header = () => {
    return (
        <div className='header-area'>
            <div className='main-header header-sticky sticky-bar'>
                <div className='container-fluid'>
                    <div className='row menu-wrapper align-items-center justify-content-between'>
                        <div className='header-left d-flex align-items-center'>
                            <div className='logo'>
                                <Link className='link' style={{ textDecoration: 'none' }} to='/'>
                                    <img
                                        src={require('../../assets/images/logos/bgw-192x158px.png')}
                                        alt='brogemway'
                                    />
                                </Link>
                            </div>
                            {/* <div className='logo-sm'>
                                <Link className='link' style={{ textDecoration: 'none' }}  to='/'>
                                    <img
                                        src={require('../../assets/images/logos/bgw-transparent.png')}
                                        alt='brogemway'
                                    />
                                </Link>
                            </div> */}
                            <div className='main-menu d-none d-lg-block'>
                                <nav>
                                    <ul id='navigation'>
                                        <li>
                                            <Link className='link' style={{ textDecoration: 'none' }} to='/'>
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/products'
                                            >
                                                Sản phẩm
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/products'
                                            >
                                                Danh mục
                                            </Link>
                                            <Submenu />
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/term'
                                            >
                                                Điều khoản
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/about'
                                            >
                                                Về chúng tôi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/contact'
                                            >
                                                Liên lạc
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='header-right d-flex align-items-center'>
                            <div className='search'>
                                <ul className='d-flex align-items-center'>
                                    <li>
                                        <form action='#' className='form-box f-right'>
                                            <input
                                                type={'text'}
                                                name='Search'
                                                placeholder='Tìm kiếm sản phẩm'
                                            />
                                            <div className='search-icon'>
                                                <i className='fa-solid fa-magnifying-glass'></i>
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        <Link
                                            to='login'
                                            className='link account-btn'
                                            style={{ textDecoration: 'none' }}
                                        >
                                            ĐĂNG NHẬP
                                        </Link>
                                    </li>
                                    <li>
                                        <div className='card-stor'>
                                            <img
                                                src={require('../../assets/images/icons/hand-bag.png')}
                                                alt='...'
                                            />
                                            <span>0</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='mobile-menu d-block d-lg-none'>
                                <div className='slicknav-menu'>
                                    <Link
                                        to='#'
                                        aria-haspopup='true'
                                        role={'button'}
                                        tabIndex='0'
                                        className='link slicknav-btn slicknav-collapsed'
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <span className='slicknav-menu-text'>MENU</span>
                                        <span className='slicknav-icon'>
                                            <span className='slicknav-icon-bar'></span>
                                            <span className='slicknav-icon-bar'></span>
                                            <span className='slicknav-icon-bar'></span>
                                        </span>
                                    </Link>
                                    <ul
                                        className='slicknav-nav'
                                        aria-hidden='false'
                                        role={'menu'}
                                        style={{ display: 'block' }}
                                    >
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/products'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                Sản phẩm
                                            </Link>
                                        </li>
                                        <li className='slicknav-parent slicknav-open'>
                                            <Link
                                                to='#'
                                                role={'menuitem'}
                                                aria-haspopup='true'
                                                tabIndex={'0'}
                                                className='link slicknav-item slicknav-row'
                                                style={{ textDecoration: 'none' }}
                                            >
                                                Danh mục
                                                <span className='slicknav-arrow'>-</span>
                                            </Link>
                                            <ul
                                                className='submenu'
                                                role={'menu'}
                                                aria-hidden='false'
                                                style={{ display: 'block' }}
                                            >
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{ textDecoration: 'none' }}
                                                        to='/category/1'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Điện thoại
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{ textDecoration: 'none' }}
                                                        to='/category/2'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Máy tính bảng/Laptop
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{ textDecoration: 'none' }}
                                                        to='/category/3'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Thời trang
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{ textDecoration: 'none' }}
                                                        to='/category/4'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Túi xách
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{ textDecoration: 'none' }}
                                                        to='/category/5'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Giày thể thao
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{ textDecoration: 'none' }}
                                                        to='/category/6'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Giày tây
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/term'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                Điều khoản
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/about'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                Về chúng tôi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{ textDecoration: 'none' }}
                                                to='/contact'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                Liên lạc
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;