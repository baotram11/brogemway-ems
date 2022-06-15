import React from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineHome } from 'react-icons/ai';

import './page404.scss';

const Page404 = () => {
    return (
        <div className='warning'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>404 - Không tìm thấy trang &#9702; Brogemway</title>
            </Helmet>

            <div class='card text-center'>
                <img
                    src={require('../../Assets/Images/warning.gif')}
                    alt='...'
                    class='card-img-center'
                />
                <div class='card-body'>
                    <h4 class='card-text'>
                        <i>Sorry, requested page not found</i>
                    </h4>

                    <a
                        href='/'
                        class='card-footer-item'
                        style={{ fontSize: '2vw', color: 'red' }}
                    >
                        {' '}
                        <AiOutlineHome /> Trang chủ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page404;
