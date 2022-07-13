import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './login.scss';

const Login = () => {
    return (
        <div className='login-bg'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Đăng nhập &#9702; Brogemway</title>
            </Helmet>

            <div className='login-form-area'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-7 col-lg-8'>
                            <div className='login-form'>
                                <div className='login-heading'>
                                    <span>Đăng nhập</span>
                                    <p>
                                        Để giữ kết nối với chúng tôi, vui lòng
                                        đăng nhập bằng tài khoản của bạn
                                    </p>
                                </div>
                                <div className='input-box'>
                                    <div className='single-input-fields'>
                                        <label>
                                            Số Điện Thoại Hoặc Địa Chỉ Email
                                        </label>
                                        <input
                                            type={'text'}
                                            placeholder='Số điện thoại/Email'
                                        />
                                    </div>
                                    <div className='single-input-fields'>
                                        <label>Mật Khẩu</label>
                                        <input
                                            type={'password'}
                                            placeholder='Nhập mật khẩu'
                                        />
                                    </div>
                                    <div className='single-input-fields login-check'>
                                        <input
                                            type={'checkbox'}
                                            id='fruit1'
                                            name='keep-log'
                                        />
                                        <label for='fruit1'> Ghi nhớ đăng nhập
                                        </label>
                                        <Link to='#' className='link f-right'>
                                            Quên mật khẩu?
                                        </Link>
                                    </div>
                                </div>
                                <div className='login-footer'>
                                    <p>Bạn chưa có tài khoản? <Link className='link' to='/register'>Đăng ký</Link> ở đây</p> 
                                    <button className='submit-btn3'>Đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
