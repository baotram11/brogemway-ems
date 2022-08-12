import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GetCodeForm = () => {
	const navigate = useNavigate();
	// const { authenticated, forgotFormData, formErrors, forgotPasswordChange, forgotPassowrd } = this.props;

	// if (authenticated) return navigate('/login');

	const handleSubmit = (event) => {
		event.preventDefault();
		// forgotPassowrd();
	};
	return (
		<div className='get-code-form'>
			<div className='container-lg justify-content-center' style={{ paddingTop: '1%' }}>
				<form className='getcode-form' onSubmit={handleSubmit}>
					<div className='input-box'>
						<div className='single-input-fields'>
							<label>Địa Chỉ Email</label>
							<p
								style={{
									fontStyle: 'italic',
									fontWeight: '500',
									fontSize: '15px',
									color: '#fd8f5f',
								}}>
								Vui lòng kiểm tra email, chúng tôi sẽ gửi bạn mã xác thực.{' '}
							</p>
							<input
								name='username'
								type={'email'}
								aria-label='Username field'
								placeholder='Nhập địa chỉ Email'
							/>
						</div>
					</div>
					<div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
						<button type='button' className='btn btn-outline-primary'>
							Send email
						</button>
						<Link className='redirect-link' to={'/login'}>
							ĐĂNG NHẬP
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
export default GetCodeForm;
