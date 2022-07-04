import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    login,
    selectLoading,
    selectErrorMessage,
    selectUser,
} from '../../store/slices/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // Select data from store
    const isLoading = useSelector(selectLoading);
    const errorMessage = useSelector(selectErrorMessage);
    const user = useSelector(selectUser);
    
    const handleLogin = async () => {
        dispatch(login({ email, password }));
    };

    if (user) {
        console.log('User: ' + user);
        return <Link to='/account' />;
    }
    return (
        <div className='login'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Đăng nhập &#9702; Brogemway</title>
            </Helmet>

            <div className='login-form'>
                <div className='container-fluid' id='loginContainer'>
                    <div className='row justify-content-center'>
                        <div className='loginForm col-lg-8'>
                            <h1>Đăng nhập</h1>
                            {errorMessage && (
                                <p style={{ color: 'red' }}>{errorMessage}</p>
                            )}

                            <form>
                                <div className='form-group mb-4'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='inputEmail'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </div>

                                <div className='form-group mb-4'>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='inputPassword'
                                        placeholder='Mật khẩu'
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    {email} + {password}
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
                                        <Link to='/'>Quên mật khẩu?</Link>
                                    </label>

                                    <br />

                                    <label></label>
                                </div>

                                <button
                                    type='submit'
                                    className='btn btn-lg btn-block btn-success'
                                    onClick={handleLogin}
                                    disabled={isLoading}
                                >
                                    Đăng nhập
                                </button>
                                <br />
                                <label className='create-account mt-3'>
                                    <span>Bạn chưa có tài khoản? </span>
                                    <Link to='/register'> Tạo tài khoản </Link>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
