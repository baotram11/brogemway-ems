import React, { useState } from 'react';

const ChangePassword = () => {
	const [oldPasswordType, setOldPasswordType] = useState('password');
	const [newPasswordType, setNewPasswordType] = useState('password');
	const [confirmNewPasswordType, setConfirmNewPasswordType] = useState('password');

	const toggleOldPassword = () => {
		if (oldPasswordType === 'password') {
			setOldPasswordType('text');
			return;
		}
		setOldPasswordType('password');
	};
	const toggleNewPassword = () => {
		if (newPasswordType === 'password') {
			setNewPasswordType('text');
			return;
		}
		setNewPasswordType('password');
	};
	const toggleConfirmNewPassword = () => {
		if (confirmNewPasswordType === 'password') {
			setConfirmNewPasswordType('text');
			return;
		}
		setConfirmNewPasswordType('password');
	};

	return (
		<div id='account-change-password'>
			<div className='card-body pb-2'>
				<div className='form-group'>
					<label className='form-label'>Mật khẩu hiện tại</label>
					<div className='input-group'>
						<input
							className='form-control'
							name='password'
							type={oldPasswordType}
							aria-label='Password field'
							aria-describedby='button-addon1'
							placeholder='Nhập mật khẩu cũ'
							autoComplete='off'
							// value={form.password}
							// onChange={onUpdateField}
							// onBlur={onBlurField}
						/>

						<button
							className='input-group-btn border-left-0'
							id='button-addon1'
							type='button'
							onClick={toggleOldPassword}>
							{oldPasswordType === 'password' ? (
								<i className='fa-solid fa-eye-slash'></i>
							) : (
								<i className='fa-solid fa-eye'></i>
							)}
						</button>
					</div>
				</div>

				<div className='form-group'>
					<label className='form-label'>Mật khẩu mới</label>
					<div className='input-group'>
						<input
							className='form-control'
							name='password'
							type={newPasswordType}
							aria-label='Password field'
							aria-describedby='button-addon1'
							placeholder='Nhập mật khẩu mới'
							autoComplete='off'
							// value={form.password}
							// onChange={onUpdateField}
							// onBlur={onBlurField}
						/>

						<button
							className='input-group-btn border-left-0'
							id='button-addon1'
							type='button'
							onClick={toggleNewPassword}>
							{newPasswordType === 'password' ? (
								<i className='fa-solid fa-eye-slash'></i>
							) : (
								<i className='fa-solid fa-eye'></i>
							)}
						</button>
					</div>{' '}
				</div>

				<div className='form-group'>
					<label className='form-label'>Nhập lại mật khẩu mới</label>
					<div className='input-group'>
						<input
							className='form-control'
							name='password'
							type={confirmNewPasswordType}
							aria-label='Password field'
							aria-describedby='button-addon1'
							placeholder='Nhập lại mật khẩu mới'
							autoComplete='off'
							// value={form.password}
							// onChange={onUpdateField}
							// onBlur={onBlurField}
						/>

						<button
							className='input-group-btn border-left-0'
							id='button-addon1'
							type='button'
							onClick={toggleConfirmNewPassword}>
							{confirmNewPasswordType === 'password' ? (
								<i className='fa-solid fa-eye-slash'></i>
							) : (
								<i className='fa-solid fa-eye'></i>
							)}
						</button>
					</div>{' '}
				</div>

				<div
					className='d-flex flex-row-reverse mt-4'
					style={{
						width: '640px',
						maxWidth: '100%',
					}}>
					<button type='button' className='btn-customer'>
						Lưu thay đổi
					</button>
					<hr className='border-light m-0' />
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
