import React from 'react';
import { Link } from 'react-router-dom';
import Submenu from '../../components/Submenu/submenu';
import UserMenu from '../../components/UserMenu/userMenu';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectNewUser } from '../../store/slices/authSlice';
import SearchForm from '../../components/SearchForm/searchForm';

window.addEventListener('DOMContentLoaded', (event) => {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainHeader');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('sticky-bar');
        } else {
            navbarCollapsible.classList.add('sticky-bar');
        }
    };

    document.addEventListener('scroll', navbarShrink);
});

const Header = () => {
    const currUser = useSelector(selectCurrentUser);
    const newUser = useSelector(selectNewUser);
    console.log(currUser);
    console.log(newUser);

    return (
        <div className='header-area'>
            <div className='main-header header-sticky' id='mainHeader'>
                <div className='container-fluid'>
                    <div className='row menu-wrapper align-items-center justify-content-between'>
                        <div className='header-left d-inline-flex align-items-center'>
                            <div className='logo'>
                                <Link
                                    className='link'
                                    style={{ textDecoration: 'none' }}
                                    to='/'
                                >
                                    <img
                                        src={require('../../assets/images/logos/bgw-192x158px.png')}
                                        alt='brogemway'
                                    />
                                </Link>
                            </div>
                            <div className='logo2'>
                                <Link
                                    className='link'
                                    style={{ textDecoration: 'none' }}
                                    to='/'
                                >
                                    <img
                                        style={{ height: '5em' }}
                                        src={require('../../assets/images/logos/bgw_v2-transparent.png')}
                                        alt='brogemway'
                                    />
                                </Link>
                            </div>
                            <div className='main-menu'>
                                <nav>
                                    <ul id='navigation'>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/products'
                                            >
                                                S???n ph???m
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/products'
                                            >
                                                Danh m???c
                                            </Link>
                                            <Submenu />
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/term'
                                            >
                                                ??i???u kho???n
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/about'
                                            >
                                                V??? ch??ng t??i
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/contact'
                                            >
                                                Li??n h???
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className='header-right1 d-inline-flex justify-content-end'>
                            <ul className='search d-flex align-items-center '>
                                <li>
                                    <SearchForm />
                                </li>

                                {currUser !== null ? (
                                    <li>
                                        <Link
                                            className='link'
                                            to={`/account/${currUser.account.ID}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            {currUser.account.Name}
                                        </Link>
                                        <UserMenu />
                                    </li>
                                ) : newUser !== null ? (
                                    <li>
                                        <Link
                                            className='link'
                                            to={`/account/${newUser.account.ID}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            {newUser.account.Name}
                                        </Link>
                                        <UserMenu />
                                    </li>
                                ) : (
                                    <li>
                                        <Link
                                            className='link account-btn'
                                            to='/login'
                                            style={{ textDecoration: 'none' }}
                                        >
                                            ????NG NH???P/????NG K??
                                        </Link>
                                    </li>
                                )}

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
                                        <span className='slicknav-menu'>
                                            MENU
                                        </span>
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
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                Trang ch???
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/products'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                S???n ph???m
                                            </Link>
                                        </li>
                                        <li className='slicknav-parent slicknav-open'>
                                            <Link
                                                to='#'
                                                role={'menuitem'}
                                                aria-haspopup='true'
                                                tabIndex={'0'}
                                                className='link slicknav-item slicknav-row'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Danh m???c
                                                <span className='slicknav-arrow'>
                                                    -
                                                </span>
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
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                        to='/category/1'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        ??i???n tho???i
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                        to='/category/2'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        M??y t??nh b???ng/Laptop
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                        to='/category/3'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Th???i trang
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                        to='/category/4'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        T??i x??ch
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                        to='/category/5'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Gi??y th??? thao
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='link'
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                        to='/category/6'
                                                        role={'menuitem'}
                                                        tabIndex='0'
                                                    >
                                                        Gi??y t??y
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/term'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                ??i???u kho???n
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/about'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                V??? ch??ng t??i
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className='link'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                                to='/contact'
                                                role={'menuitem'}
                                                tabIndex='0'
                                            >
                                                Li??n l???c
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
