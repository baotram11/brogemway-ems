import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';

import { UseRegisterFormValidator } from '../../utils/useFormValidator';
import { useDispatch, useSelector } from 'react-redux';
import { addAccount, selectAdd, selectErrorCreate, selectNewAccount } from '../../store/slices/accountSlice';

const RegisterForm = (props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const add = useSelector(selectAdd);
    // const newAccount = useSelector(selectNewAccount);
    // const errorCreate = useSelector(selectErrorCreate);

    const [passwordType, setPasswordType] = useState('password');
    const [confirmPasswordType, setConfirmPasswordType] = useState('password');

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };
    const toggleConfirmPassword = () => {
        if (confirmPasswordType === 'password') {
            setConfirmPasswordType('text');
            return;
        }
        setConfirmPasswordType('password');
    };

    const [form, setForm] = useState({
        name: '',
        email: '',
        telephone: '',
        password: '',
        confirmPassword: '',
    });

    const { errors, validateForm, onBlurField } = UseRegisterFormValidator(form);

    const onUpdateField = (event) => {
        const field = event.target.name;

        const nextFormState = {
            ...form,
            [field]: event.target.value,
        };

        setForm(nextFormState);

        if (errors[field].dirty) {
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
        }
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        const { isValid } = validateForm({
            form,
            errors,
            forceTouchErrors: true,
        });
        if (!isValid) return;

        if (add !== 'succeeded') dispatch(addAccount(form));
    };

    const formFieldError = { border: '1px solid #e11d48' };

    const formFieldErrorMessage = {
        color: '#e11d48',
        fontWeight: 'bold',
        fontSize: '15px',
        textAlign: 'right',
        width: '100%',
    };

    useEffect(() => {
        console.log(add);

        if (add === 'succeeded') {
            return navigate('/');
        } else if (add === 'failed') {
            alert(JSON.stringify('Đăng ký chưa thành công!', null, 2));
        }
    }, [add, navigate]);

    return (
        <div className='register-form-area'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-7 col-lg-8'>
                        <form className='register-form' onSubmit={onSubmitForm}>
                            <div className='register-heading text-center'>
                                <span>Đăng ký</span>
                                <p
                                    style={{
                                        fontStyle: 'italic',
                                        fontWeight: '500',
                                        fontSize: '15px',
                                    }}
                                >
                                    Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi
                                </p>
                            </div>
                            <div className='input-box'>
                                <div className='single-input-fields'>
                                    <label>Họ và tên</label>
                                    <input
                                        className={clsx(
                                            errors.name.dirty && errors.name.error && formFieldError
                                        )}
                                        name='name'
                                        type={'text'}
                                        aria-label='Name field'
                                        placeholder='Nhập họ và tên của bạn'
                                        value={form.name}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    {errors.name.dirty && errors.name.error ? (
                                        <p style={formFieldErrorMessage}>{errors.name.message}</p>
                                    ) : null}
                                </div>

                                <div className='single-input-fields'>
                                    <label>Địa Chỉ Email</label>
                                    <input
                                        className={clsx(
                                            errors.email.dirty && errors.email.error && formFieldError
                                        )}
                                        name='email'
                                        type={'text'}
                                        aria-label='Email field'
                                        placeholder='Nhập địa chỉ email'
                                        value={form.email}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    {errors.email.dirty && errors.email.error ? (
                                        <p style={formFieldErrorMessage}>{errors.email.message}</p>
                                    ) : null}
                                </div>

                                <div className='single-input-fields'>
                                    <label>Số điện thoại</label>
                                    <input
                                        className={clsx(
                                            errors.telephone.dirty && errors.telephone.error && formFieldError
                                        )}
                                        name='telephone'
                                        type={'tel'}
                                        aria-label='Telephone field'
                                        placeholder='Nhập số điện thoại'
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    {errors.telephone.dirty && errors.telephone.error ? (
                                        <p style={formFieldErrorMessage}>{errors.telephone.message}</p>
                                    ) : null}
                                </div>

                                <div className='single-input-fields input-group'>
                                    <label>Mật Khẩu</label>
                                    <input
                                        className={clsx(
                                            errors.password.dirty && errors.password.error && formFieldError
                                        )}
                                        name='password'
                                        type={passwordType}
                                        aria-label='Password field'
                                        aria-describedby='button-addon1'
                                        placeholder='Nhập mật khẩu'
                                        value={form.password}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />

                                    <button
                                        className='input-group-btn border-left-0'
                                        id='button-addon1'
                                        type='button'
                                        onClick={togglePassword}
                                    >
                                        {passwordType === 'password' ? (
                                            <i className='fa-solid fa-eye-slash'></i>
                                        ) : (
                                            <i className='fa-solid fa-eye'></i>
                                        )}
                                    </button>

                                    {errors.password.dirty && errors.password.error ? (
                                        <p style={formFieldErrorMessage}>{errors.password.message}</p>
                                    ) : null}
                                </div>

                                <div className='single-input-fields input-group'>
                                    <label>Xác nhận mật khẩu</label>
                                    <input
                                        className={clsx(
                                            errors.confirmPassword.dirty &&
                                                errors.confirmPassword.error &&
                                                formFieldError
                                        )}
                                        name='confirmPassword'
                                        type={confirmPasswordType}
                                        aria-label='Confirm password field'
                                        aria-describedby='button-addon2'
                                        placeholder='Nhập lại mật khẩu'
                                        value={form.confirmPassword}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    <button
                                        className='input-group-btn border-left-0'
                                        id='button-addon2'
                                        type='button'
                                        onClick={toggleConfirmPassword}
                                    >
                                        {confirmPasswordType === 'password' ? (
                                            <i className='fa-solid fa-eye-slash'></i>
                                        ) : (
                                            <i className='fa-solid fa-eye'></i>
                                        )}
                                    </button>
                                    {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
                                        <p style={formFieldErrorMessage}>{errors.confirmPassword.message}</p>
                                    ) : null}
                                </div>
                            </div>

                            <div className='register-footer'>
                                <p>
                                    Bạn đã có tài khoản?{' '}
                                    <Link className='link' to='/login'>
                                        Đăng nhập{' '}
                                    </Link>
                                    ở đây
                                </p>
                                <button className='submit-btn1' type='submit'>
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
