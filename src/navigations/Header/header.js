import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectNewUser } from '../../store/slices/authSlice';
import AuthContext from '../../context/authContext';
import { useContext } from 'react';
import jwt from 'jwt-decode';
import { fetchAccountById, selectAccount, selectStatusFetchById } from '../../store/slices/accountSlice';
// import HeaderBar from '../../components/HeaderBar/headerBar';
import { Link } from 'react-router-dom';
import Submenu from '../../components/Submenu/submenu';
import SearchForm from '../../components/SearchForm/searchForm';
import UserMenu from '../../components/UserMenu/userMenu';

const Header = () => {
	const dispatch = useDispatch();
	const statusFetchById = useSelector(selectStatusFetchById);

	const currUser = useSelector(selectCurrentUser);
	const newUser = useSelector(selectNewUser);
	console.log(currUser);
	console.log(newUser);

	const { authToken } = useContext(AuthContext);

	const [user, setUser] = useState(null);
	const selectUser = useSelector(selectAccount);

	useEffect(() => {
		if (currUser) {
			setUser(currUser);
		} else if (newUser) {
			setUser(currUser);
		} else if (authToken) {
			console.log('authToken');
			console.log(authToken);

			const rawUser = jwt(authToken);
			console.log('authToken1');
			console.log(authToken);
			if (statusFetchById === 'idle')
				dispatch(fetchAccountById({ id: rawUser.id, accessToken: authToken }));
			setUser(selectUser);
		}
		console.log(user);
	}, [user, currUser, newUser, authToken, selectUser, statusFetchById, dispatch]);

	// return <HeaderBar {...user} />;
	return (
		<div className='header-area'>
			<div className='main-header header-sticky' id='mainHeader'>
				<div className='container-fluid'>
					<div className='row menu-wrapper align-items-center justify-content-between'>
						<div className='header-left d-inline-flex align-items-center'>
							<div className='logo'>
								<Link className='link' style={{ textDecoration: 'none' }} to='/'>
									<img
										src={require('../../assets/images/logos/bgw-192x158px.png')}
										alt='brogemway'
									/>
								</Link>
							</div>
							<div className='logo2'>
								<Link className='link' style={{ textDecoration: 'none' }} to='/'>
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
												to='/products'>
												Sản phẩm
											</Link>
										</li>
										<li>
											<Link
												className='link'
												style={{
													textDecoration: 'none',
												}}
												to='/products'>
												Danh mục
											</Link>
											<Submenu />
										</li>
										<li>
											<Link
												className='link'
												style={{
													textDecoration: 'none',
												}}
												to='/term'>
												Điều khoản
											</Link>
										</li>
										<li>
											<Link
												className='link'
												style={{
													textDecoration: 'none',
												}}
												to='/about'>
												Về chúng tôi
											</Link>
										</li>
										<li>
											<Link
												className='link'
												style={{
													textDecoration: 'none',
												}}
												to='/contact'>
												Liên hệ
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
								{user ? (
									<li>
										{console.log(user)}
										<Link
											className='link'
											to={`/account/${'user.account.ID'}`}
											style={{ textDecoration: 'none' }}>
											{'user.account.Name'}
										</Link>
										{/* <UserMenu /> */}
									</li>
								) : (
									<li>
										<Link
											className='link account-btn'
											to='/login'
											style={{ textDecoration: 'none' }}>
											ĐĂNG NHẬP/ĐĂNG KÝ
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
										style={{ textDecoration: 'none' }}>
										<span className='slicknav-menu'>MENU</span>
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
										style={{ display: 'block' }}>
										<li>
											<Link
												className='link'
												style={{
													textDecoration: 'none',
												}}
												to='/'
												role={'menuitem'}
												tabIndex='0'>
												Trang chủ
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
												tabIndex='0'>
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
												style={{
													textDecoration: 'none',
												}}>
												Danh mục
												<span className='slicknav-arrow'>-</span>
											</Link>
											<ul
												className='submenu'
												role={'menu'}
												aria-hidden='false'
												style={{ display: 'block' }}>
												<li>
													<Link
														className='link'
														style={{
															textDecoration: 'none',
														}}
														to='/category/1'
														role={'menuitem'}
														tabIndex='0'>
														Điện thoại
													</Link>
												</li>
												<li>
													<Link
														className='link'
														style={{
															textDecoration: 'none',
														}}
														to='/category/2'
														role={'menuitem'}
														tabIndex='0'>
														Máy tính bảng/Laptop
													</Link>
												</li>
												<li>
													<Link
														className='link'
														style={{
															textDecoration: 'none',
														}}
														to='/category/3'
														role={'menuitem'}
														tabIndex='0'>
														Thời trang
													</Link>
												</li>
												<li>
													<Link
														className='link'
														style={{
															textDecoration: 'none',
														}}
														to='/category/4'
														role={'menuitem'}
														tabIndex='0'>
														Túi xách
													</Link>
												</li>
												<li>
													<Link
														className='link'
														style={{
															textDecoration: 'none',
														}}
														to='/category/5'
														role={'menuitem'}
														tabIndex='0'>
														Giày thể thao
													</Link>
												</li>
												<li>
													<Link
														className='link'
														style={{
															textDecoration: 'none',
														}}
														to='/category/6'
														role={'menuitem'}
														tabIndex='0'>
														Giày tây
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
												tabIndex='0'>
												Điều khoản
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
												tabIndex='0'>
												Về chúng tôi
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
												tabIndex='0'>
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
