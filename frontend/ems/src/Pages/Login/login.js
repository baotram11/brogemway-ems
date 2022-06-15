import React from 'react';
import { Helmet } from 'react-helmet';

//import './login.scss';

const Login = () => {
    return (
        <div className='login'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Đăng nhập &#9702; Brogemway</title>
            </Helmet>

            <div class='container-fluid' id='loginContainer'>
                <div class='row justify-content-center'>
                    <div class='col-lg-8'>
                        <div class='loginForm'>
                            <h1>Đăng ký</h1>

                            {/* Login Form */}
                            <form>
                                <div class='form-group mb-4'>
                                    <input
                                        type='username'
                                        class='form-control'
                                        id='inputUsername'
                                        placeholder='Tên đăng nhập'
                                    />
                                </div>

                                <div class='form-group mb-4'>
                                    <input
                                        type='password'
                                        class='form-control'
                                        id='inputPassword'
                                        placeholder='Mật khẩu'
                                    />
                                </div>

                                <div class='form-check mb-4'>
                                    <label class='switch '>
                                        <input type='checkbox' />
                                        <span class='slider round'></span>
                                    </label>

                                    <label
                                        class='form-check-label'
                                        for='checkRemember'
                                    >
                                        Ghi nhớ đăng nhập
                                    </label>

                                    <label class='forgot-password'>
                                        <a href='/'>Quên mật khẩu?</a>
                                    </label>

                                    <br />

                                    <label></label>
                                </div>

                                <button
                                    type='submit'
                                    class='btn btn-lg btn-block btn-success'
                                >
                                    Đăng nhập
                                </button>
                                <br />
                                <label class='create-account mt-3'>
                                    <span>Bạn chưa có tài khoản? </span>
                                    <a href='/signup'> Tạo tài khoản </a>
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
