import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountById, selectAccount, selectStatusFetchById } from '../../store/slices/accountSlice';
import { selectCurrentUser } from '../../store/slices/authSlice';
import AuthContext from '../../context/authContext';
import { useContext } from 'react';
import jwt from 'jwt-decode';
import NavSlider from '../NavSlider/navSlider';
const UserDetail = () => {
	const dispatch = useDispatch();

	const statusFetchById = useSelector(selectStatusFetchById);
	const account = useSelector(selectAccount);

	const currentUser = useSelector(selectCurrentUser);
	const { authToken, userId } = useContext(AuthContext);

	async function fetchData() {
		// You can await here
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
	useEffect(() => {
		console.log(statusFetchById);
		fetchData();
	}, []); // Or [] if effect doesn't need props or state
	
	const breadcrumb = {
		title: account.account.Name,
		titlePath: '#',
	};
	return (
		<div>
			<NavSlider {...breadcrumb} />
			<div className='container rounded bg-white mt-5 mb-5'>
				<div className='row'>
					<div className='col-md-3 border-right'>
						<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
							<img
								className='rounded-circle mt-5'
								width='150px'
								src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
								alt='...'
							/>
							<span className='font-weight-bold'>{account.account.Name}</span>
							<span className='text-black-50'>{account.account.Email}</span>
							<span> </span>
						</div>
					</div>
					<div className='col-md-5 border-right'>
						<div className='p-3 py-5'>
							<div className='d-flex justify-content-between align-items-center mb-3'>
								<h4 className='text-right'>Thông tin cá nhân</h4>
							</div>
							<div className='row mt-2'>
								<div className='col-md-6'>
									<label className='labels'>Họ và tên</label>
									<input
										type='text'
										className='form-control'
										placeholder={`${account.account.Name}`}
										// value=''
									/>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Số điện thoại</label>
									<input
										type='text'
										className='form-control'
										placeholder={`${account.account.PhoneNumber}`}
										// value=''
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Địa chỉ</label>
									<input
										type='text'
										className='form-control'
										placeholder={`${account.account.Address}`}
										// value=''
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Địa chỉ Email</label>
									<input
										type='text'
										className='form-control'
										placeholder={`${account.account.Email}`}
										// value=''
									/>
								</div>
							</div>
							<div className='mt-5 text-center'>
								<button className='btn btn-primary profile-button' type='button'>
									Lưu
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetail;
