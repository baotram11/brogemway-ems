import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

// import './RegisterScreen.scss';

const RegisterScreen = () => {
	return (
		<div className='register-screen'>
			<div className='container-fluid' id='registerContainer'>
				<div className='row justify-content-center'>
					<div className='col m-5 '>
						<div className='registerForm'>
							<h1>Đăng ký</h1>

							<div className='row row-cols-2'>
								<div className='col-5'>
									<div className='card'>
										<button className='btn btn-google btn-block'>
											<FcGoogle /> Đăng ký với Google
										</button>
									</div>
								</div>

								<div className='col-3'>
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
												<Link href='/forgot-password'>
													Quên mật khẩu?
												</Link>
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
											<span>Bạn đã có tài khoản? </span>
											<Link href='/login'> Đăng nhập </Link>
										</label>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterScreen;