import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAccountById, selectAccount, selectStatusFetchById } from '../../store/slices/accountSlice';
import { selectCurrentUser } from '../../store/slices/authSlice';

import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';
import jwt from 'jwt-decode';

import NavSlider from '../NavSlider/navSlider';

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CreateAvatar from '../ProfilePhoto/createAvatar';
import ChangePassword from '../ChangePassword/changePassword';

const UserDetail = () => {
	const dispatch = useDispatch();

	const statusFetchById = useSelector(selectStatusFetchById);
	const account = useSelector(selectAccount);

	const currentUser = useSelector(selectCurrentUser);
	const { authToken } = useContext(AuthContext);

	const [rawAccount, setRawAccount] = useState({
		Address: 'Nhập địa chỉ của bạn',
		CreatedAt: new Date().toLocaleString(),
		Email: 'Email',
		ID: 'Mã số',
		IsActive: false,
		Level: 'bidder',
		Name: 'Nhập họ và tên của bạn',
		PhoneNumber: 'Số điện thoại',
		UpdateAt: '',
	});

	useEffect(() => {
		async function fetchData() {
			if (statusFetchById !== 'succeeded' || !account) {
				if (currentUser) {
					return dispatch(
						fetchAccountById({
							id: currentUser.account._id,
							accessToken: currentUser.accessToken,
						})
					);
				} else if (authToken) {
					const rawUser = jwt(authToken);
					return dispatch(
						fetchAccountById({
							id: rawUser.id,
							accessToken: authToken,
						})
					);
				}
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		if (account) setRawAccount(account.account);
		console.log(rawAccount);
	},[]);

	const breadcrumb = {
		title: account.account.Name,
		titlePath: '#',
	};

	const [imageSrc, setImageSrc] = useState('');
	const getData = (imageSrc) => {
		setImageSrc(imageSrc);
	};

	return (
		<div className='user-detail'>
			<NavSlider {...breadcrumb} />
			<Tab.Container bsPrefix='list-group-tabs' defaultActiveKey='#account-general' transition={false}>
				<Row
					style={{
						marginLeft: '10%',
						marginRight: '3%',
						marginTop: '1%',
						marginBottom: '10%',
					}}>
					<Col sm={2}>
						<ListGroup bsPrefix='list-group'>
							<ListGroup.Item bsPrefix='list-group-item' action href='#account-general'>
								Thông tin cá nhân
							</ListGroup.Item>
							<ListGroup.Item action href='#account-change-password'>
								Thay đổi mật khẩu
							</ListGroup.Item>
							<ListGroup.Item action href='#account-orders'>
								Đơn hàng của bạn
							</ListGroup.Item>
							<ListGroup.Item action href='#account-favourite-products'>
								Sản phẩm yêu thích
							</ListGroup.Item>
							<ListGroup.Item action href='#account-connections'>
								Liên kết tài khoản
							</ListGroup.Item>
							<ListGroup.Item action href='#account-notifications'>
								Cài đặt thông báo
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col>
						<Tab.Content transition={false}>
							<Tab.Pane eventKey='#account-general'>
								<div className='row' id='account-general'>
									<div className='col-8'>
										<h2>Hồ sơ</h2>
										<hr className='border-light m-0' />

										<div className='card-body'>
											<div className='form-group'>
												<label className='form-label'>Họ và tên</label>
												<input
													type='text'
													className='form-control mb-1'
													value={rawAccount.Name}
												/>
											</div>
											<div className='form-group'>
												<label className='form-label'>Số điện thoại</label>
												<input
													disabled
													type='text'
													className='form-control'
													value={rawAccount.PhoneNumber}
												/>
											</div>
											<div className='form-group'>
												<label className='form-label'>E-mail</label>
												<input
													disabled
													type='text'
													className='form-control mb-1'
													value={rawAccount.Email}
												/>
												{/* <div className='alert alert-warning mt-3'>
													Your email is not confirmed. Please check your inbox.
													<br />
													<Link to='#'>Resend confirmation</Link>
												</div> */}
											</div>
											<div className='form-group'>
												<label className='form-label'>Địa chỉ</label>
												<input
													type='text'
													className='form-control'
													value={rawAccount.Address}
												/>
											</div>
											<div className='form-group'>
												<label className='form-label'>Ngày tạo</label>
												<input
													type='text'
													className='form-control'
													value={rawAccount.CreatedAt}
												/>
											</div>

											<div className='d-flex flex-row-reverse mt-4'>
												<button type='button' className='btn-customer'>
													Lưu thay đổi
												</button>
												<hr className='border-light m-0' />
											</div>
										</div>
									</div>
									<div className='col' style={{ marginTop: '30px' }}>
										<div className='card-body media align-items-center'>
											<img
												src={require(`../../assets/images/avatars/11.png`)}
												alt={`@${account.account.Name}`}
												className='d-block avatar'
											/>
											<div className='media-body ml-4 mt-10'>
												<label className='btn btn-outline-customer'>
													<i className='fa-solid fa-pencil' color='#1d2547'></i>
													{'  '}
													Thay đổi
													<input
														type='file'
														className='account-settings-fileinput'
													/>
												</label>{' '}
												<div className='text-light small mt-1'>
													Cho phép định dạng JPG, GIF hoặc PNG. Kích thước tối đa là
													800K
												</div>
												<CreateAvatar getData={getData} />
											</div>
										</div>
									</div>
								</div>
							</Tab.Pane>

							<Tab.Pane eventKey='#account-change-password'>
								<ChangePassword />
							</Tab.Pane>

							<Tab.Pane eventKey='#account-orders'>Tính năng đang được phát triển.</Tab.Pane>

							<Tab.Pane eventKey='#account-favourite-products'>
								Tính năng đang được phát triển.
							</Tab.Pane>

							<Tab.Pane eventKey='#account-connections'>
								<div id='account-connections'>
                                    
									<div className='card-body'>
										<button type='button' className='btn btn-google'>
											Liên kết với <strong>Google</strong>
										</button>
									</div>
									<hr className='border-light m-0' />
									<div className='card-body'>
										<button type='button' className='btn btn-facebook'>
											Liên kết với <strong>Facebook</strong>
										</button>
									</div>
									<hr className='border-light m-0' />
									<div className='card-body'>
										<button type='button' className='btn btn-instagram'>
											Liên kết với <strong>Instagram</strong>
										</button>
									</div>
								</div>
							</Tab.Pane>

							<Tab.Pane eventKey='#account-notifications'>
								<div id='account-notifications'>
									<div className='card-body pb-2'>
										<h6 className='mb-4'>Activity</h6>

										<div className='form-group'>
											<label className='switcher'>
												<input
													type='checkbox'
													className='switcher-input'
													checked=''
												/>
												<span className='switcher-indicator'>
													<span className='switcher-yes'></span>
													<span className='switcher-no'></span>
												</span>
												<span className='switcher-label'>
													Email me when someone comments on my article
												</span>
											</label>
										</div>
										<div className='form-group'>
											<label className='switcher'>
												<input
													type='checkbox'
													className='switcher-input'
													checked=''
												/>
												<span className='switcher-indicator'>
													<span className='switcher-yes'></span>
													<span className='switcher-no'></span>
												</span>
												<span className='switcher-label'>
													Email me when someone answers on my forum thread
												</span>
											</label>
										</div>
										<div className='form-group'>
											<label className='switcher'>
												<input type='checkbox' className='switcher-input' />
												<span className='switcher-indicator'>
													<span className='switcher-yes'></span>
													<span className='switcher-no'></span>
												</span>
												<span className='switcher-label'>
													Email me when someone follows me
												</span>
											</label>
										</div>
									</div>
									<hr className='border-light m-0' />
									<div className='card-body pb-2'>
										<h6 className='mb-4'>Application</h6>

										<div className='form-group'>
											<label className='switcher'>
												<input
													type='checkbox'
													className='switcher-input'
													checked=''
												/>
												<span className='switcher-indicator'>
													<span className='switcher-yes'></span>
													<span className='switcher-no'></span>
												</span>
												<span className='switcher-label'>News and announcements</span>
											</label>
										</div>
										<div className='form-group'>
											<label className='switcher'>
												<input type='checkbox' className='switcher-input' />
												<span className='switcher-indicator'>
													<span className='switcher-yes'></span>
													<span className='switcher-no'></span>
												</span>
												<span className='switcher-label'>Weekly product updates</span>
											</label>
										</div>
										<div className='form-group'>
											<label className='switcher'>
												<input
													type='checkbox'
													className='switcher-input'
													checked=''
												/>
												<span className='switcher-indicator'>
													<span className='switcher-yes'></span>
													<span className='switcher-no'></span>
												</span>
												<span className='switcher-label'>Weekly blog digest</span>
											</label>
										</div>
									</div>
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

export default UserDetail;
