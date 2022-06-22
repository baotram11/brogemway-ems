import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import './LoginScreen.scss';

const LoginScreen = () => {
	return (
		<div className='login-screen'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Đăng nhập &#9702; Brogemway</title>
			</Helmet>

			<div className='container-fluid' id='loginContainer'>
				<div className='row justify-content-center'>
					<div className='loginForm col-lg-8'>
						<h1>Đăng nhập</h1>

						<form>
							<div className='form-group mb-4'>
								<input
									type='username'
									className='form-control'
									id='inputUsername'
									placeholder='Tên đăng nhập'
								/>
							</div>

							<div className='form-group mb-4'>
								<input
									type='password'
									className='form-control'
									id='inputPassword'
									placeholder='Mật khẩu'
								/>
							</div>

							<div className='form-check mb-4'>
								<label className='switch '>
									<input type='checkbox' />
									<span className='slider round'></span>
								</label>

								<label
									className='form-check-label'
									for='checkRemember'
								>
									Ghi nhớ đăng nhập
								</label>

								<label className='forgot-password'>
									<Link href='/'>Quên mật khẩu?</Link>
								</label>

								<br />

								<label></label>
							</div>

							<button
								type='submit'
								className='btn btn-lg btn-block btn-success'
							>
								Đăng nhập
							</button>
							<br />
							<label className='create-account mt-3'>
								<span>Bạn chưa có tài khoản? </span>
								<Link href='/register'> Tạo tài khoản </Link>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
