import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GetCodeForm from '../../components/GetCodeForm/getCodeForm';

const ForgotPassword = () => {
	return (
		<div className='forgot-password-screen'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Quên mật khẩu &#9702; Brogemway</title>
			</Helmet>

			<div className='footer-social pt-35 pl-35' style={{ display: 'inline-block' }}>
				<Link className='link' to='/'>
					<i className='fa-solid fa-house'></i>
				</Link>
			</div>
			<div className='container-lg'>
				<div className='card'>
					<h2>Quên mật khẩu?</h2>
					<p style={{ paddingTop: '5px' }}>
						Thay đổi mật khẩu của bạn bằng ba bước đơn giản sau. Việc này sẽ giúp bảo vệ tài khoản
						của bạn.
					</p>
					<p>
						<span className='index'>1. </span>
						Nhập địa chỉ email của bạn vào ô bên dưới.
					</p>
					<p>
						<span className='index'>2. </span>
						Hệ thống của chúng tôi sẽ gửi một mã xác thực gồm 6 chữ số đến email của bạn. Hãy kiểm
						tra email của bạn.
					</p>
					<p>
						<span className='index'>3. </span>
						Nhập mã xác thực vào ô bên dưới và thay đổi mật khẩu mới nhé!
					</p>
				</div>
			</div>
            <GetCodeForm />
		</div>
	);
};

export default ForgotPassword;
