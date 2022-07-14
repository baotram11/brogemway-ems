import React from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/loginForm';

const Login = () => {
    return (
        <div className='login-bg'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Đăng nhập &#9702; Brogemway</title>
            </Helmet>

            <LoginForm />
        </div>
    );
};

export default Login;
