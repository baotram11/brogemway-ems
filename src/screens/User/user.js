import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import NavSlider from '../../components/NavSlider/navSlider';
import UserDetail from '../../components/UserDetail/userDetail';

import { fetchAccountById, selectAccount, selectStatusFetchById } from '../../store/slices/accountSlice';

import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';
import { selectCurrentUser } from '../../store/slices/authSlice';

const User = () => {
	const param = useParams();
	const dispatch = useDispatch();

	const statusFetchById = useSelector(selectStatusFetchById);
	const account = useSelector(selectAccount);
	const currentUser = useSelector(selectCurrentUser);

	const { authToken } = useContext(AuthContext);

	useEffect(() => {
		if (statusFetchById === 'idle') {
			if (currentUser) {
				console.log('HERE 1');
				dispatch(
					fetchAccountById({
						id: param.id,
						accessToken: currentUser.accessToken,
					})
				);
			} else if (authToken) {
				console.log('HERE 2');

				dispatch(
					fetchAccountById({
						id: param.id,
						accessToken: authToken,
					})
				);
			}
		}
		console.log(account);
	}, [statusFetchById, dispatch, param, currentUser, authToken, account]);

	return (
		<div className='user-screen'>
			<Helmet>
				<meta charSet='utf-8' />
				{account ? (
					<title> {account.account.Name} &#9702; Brogemway</title>
				) : (
					<title>Thông tin cá nhân &#9702; Brogemway</title>
				)}
			</Helmet>
			<Header />

			{statusFetchById === 'loading' && (
				<div className='spinner-border text-secondary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			)}
			{statusFetchById === 'failed' && <h5 style={{ color: 'red' }}>Không tìm thấy tài khoản</h5>}
			{statusFetchById === 'succeeded' && <UserDetail />}
			<Footer />
		</div>
	);
};

export default User;
