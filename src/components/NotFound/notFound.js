import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='notfound'>
            <div className='card text-center'>
                <img
                    src={require('../../assets/images/notfound.gif')}
                    alt='...'
                    className='card-img-center'
                />
                <div className='card-body'>
                    <h4 className='card-text'>
                        <i>Xin lỗi, Trang web không tìm thấy, vui lòng quay lại trang chủ</i>
                    </h4>

                    <Link style={{ fontSize: '2vw', color: 'red' }} to={'/'} className='card-footer-item'>
                        <AiOutlineHome />
                        <h6>Trang chủ</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
