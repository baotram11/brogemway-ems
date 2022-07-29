import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/registerForm';

const Register = () => {
	return (
		<div className='register-bg'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Đăng ký &#9702; Brogemway</title>
			</Helmet>
			<div className='footer-social pt-35 pl-35' style={{ display: 'inline-block' }}>
				<Link className='link' to='/'>
					<i className='fa-solid fa-house'></i>
				</Link>
			</div>
			<RegisterForm />
		</div>
	);
};

export default Register;

// Your password must:
// Include an UPPER and lowercase letter
// Include a number
// Include one or more of these special characters: .@$!%*#?&><)(^-_
// Be between 8 and 100 characters
