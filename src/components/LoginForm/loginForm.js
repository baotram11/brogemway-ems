import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { UseLoginFormValidator } from '../../utils/useFormValidator';

import {
    loginUser,
    selectCurrentUser,
    selectErrorLogin,
    selectLogin,
} from '../../store/slices/authSlice';
import ForgotPassword from '../ForgotPassword/forgotPassword';
import Alert from '../Alert/alert';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = useSelector(selectLogin);
    const currentUser = useSelector(selectCurrentUser);
    const errorMessage = useSelector(selectErrorLogin);

    const [passwordType, setPasswordType] = useState('password');
    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const { errors, validateForm, onBlurField } = UseLoginFormValidator(form);

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

    const onSubmitForm = async (event) => {
        event.preventDefault();
        const { isValid } = validateForm({
            form,
            errors,
            forceTouchErrors: true,
        });
        if (!isValid) return;

        if (login !== 'succeeded') dispatch(loginUser(form));
    };

    const formFieldError = { border: '1px solid #e11d48' };

    const formFieldErrorMessage = {
        color: '#e11d48',
        fontWeight: 'bold',
        fontSize: '15px',
        textAlign: 'right',
        width: '100%',
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const props = {
        type: 'error',
        show: show,
        message: 'Something went wrong, please try again.',
        handleClose: handleClose,
    };
    const handleForgotPassword = () => {
        console.log('Forgot Password !');

        return setShow(true);
    };

    useEffect(() => {
        if (login === 'succeeded') {
            return navigate(-1);
        } else if (login === 'failed' && !currentUser) {
            setShow(true);
        }
    }, [login, currentUser, setShow, navigate]);

    return (
        <div className='login-form-area'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-7 col-lg-8'>
                        <form className='login-form' onSubmit={onSubmitForm}>
                            <div className='login-heading text-center'>
                                <span>Đăng nhập</span>
                                <p
                                    style={{
                                        fontStyle: 'italic',
                                        fontWeight: '500',
                                        fontSize: '15px',
                                    }}
                                >
                                    Để giữ kết nối với chúng tôi, vui lòng đăng
                                    nhập bằng tài khoản của bạn
                                </p>
                            </div>

                            <div className='input-box'>
                                <div className='single-input-fields'>
                                    <label>
                                        Số Điện Thoại Hoặc Địa Chỉ Email
                                    </label>
                                    <input
                                        className={clsx(
                                            errors.username.dirty &&
                                                errors.username.error &&
                                                formFieldError
                                        )}
                                        name='username'
                                        type={'text'}
                                        aria-label='Username field'
                                        placeholder='Số điện thoại/Email'
                                        value={form.username}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    {errors.username.dirty &&
                                    errors.username.error ? (
                                        <p style={formFieldErrorMessage}>
                                            {errors.username.message}
                                        </p>
                                    ) : null}

                                    {errorMessage &&
                                    errorMessage.type === 'username' ? (
                                        <p style={formFieldErrorMessage}>
                                            {errorMessage.error}
                                        </p>
                                    ) : null}
                                </div>

                                <div className='single-input-fields input-group'>
                                    <label>Mật Khẩu</label>
                                    <input
                                        className={clsx(
                                            errors.password.dirty &&
                                                errors.password.error &&
                                                formFieldError
                                        )}
                                        name='password'
                                        type={passwordType}
                                        aria-label='Password field'
                                        aria-describedby='button-addon'
                                        placeholder='Nhập mật khẩu'
                                        value={form.password}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />

                                    <button
                                        className='input-group-btn border-left-0'
                                        id='button-addon'
                                        type='button'
                                        onClick={togglePassword}
                                    >
                                        {passwordType === 'password' ? (
                                            <i className='fa-solid fa-eye-slash'></i>
                                        ) : (
                                            <i className='fa-solid fa-eye'></i>
                                        )}
                                    </button>

                                    {errors.password.dirty &&
                                    errors.password.error ? (
                                        <p style={formFieldErrorMessage}>
                                            {errors.password.message}
                                        </p>
                                    ) : null}

                                    {errorMessage &&
                                    errorMessage.type === 'password' ? (
                                        <p style={formFieldErrorMessage}>
                                            {errorMessage.error}
                                        </p>
                                    ) : null}
                                </div>

                                <div className='single-input-fields login-check'>
                                    <input
                                        type={'checkbox'}
                                        id='fruit1'
                                        name='keep-log'
                                    />
                                    <label htmlFor='fruit1'>
                                        {' '}
                                        Ghi nhớ đăng nhập
                                    </label>
                                    <Link
                                        to='#'
                                        className='link f-right'
                                        onClick={handleForgotPassword}
                                    >
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                            </div>

                            <div className='login-footer'>
                                <p>
                                    Bạn chưa có tài khoản?{' '}
                                    <Link className='link' to='/register'>
                                        Đăng ký
                                    </Link>{' '}
                                    ở đây
                                </p>
                                <button className='submit-btn1'>
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {show ? <Alert {...props} /> : null}
            </div>
        </div>
    );
};

export default LoginForm;
