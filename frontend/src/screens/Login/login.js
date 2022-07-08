import React from 'react';
import { Helmet } from 'react-helmet';

import './login.scss';

const Login = () => {
    return (
        <div className='login'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Đăng nhập &#9702; Brogemway</title>
            </Helmet>
        </div>
    );
};

export default Login;
