import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/loginForm';

const Login = () => {
	return (
		<div className='login-bg'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Đăng nhập &#9702; Brogemway</title>
			</Helmet>

			<div className='footer-social pt-35 pl-35' style={{ display: 'inline-block' }}>
				<Link className='link' to='/'>
					<i className='fa-solid fa-house'></i>
				</Link>
			</div>

			<LoginForm />
		</div>
	);
};

export default Login;
