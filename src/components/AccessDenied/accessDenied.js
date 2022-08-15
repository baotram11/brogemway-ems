import React from 'react';
import { Link } from 'react-router-dom';

const AccessDenied = () => {
    return (
        <div className='access-denied'>
            <div
                className='row'
                style={{
                    backgroundColor: 'transparent',
                    paddingTop: '35%',
                    width: '36%',
                    paddingLeft: '30px',
                }}
            >
                <div
                    className='card'
                    style={{
                        border: '0px',
                        borderRadius: '35px',
                        backgroundColor: 'rgba(250,132,125, 0.8)',
                    }}
                >
                    <div className='card-body'>
                        <span
                            style={{
                                paddingLeft: '5px',
                                fontSize: '20px',
                                color: '#1d2547',
                                fontWeight: '800',
                                lineHeight: '1.6',
                            }}
                            className='card-text'
                        >
                            Bạn không có quyền truy cập vào đường dẫn này, vui
                            lòng đến{'  '}
                        </span>

                        <Link
                            to={'/'}
                            className='card-footer-item'
                            style={{ textDecoration: 'none' }}
                        >
                            <img
                                src={require('../../assets/images/icons/home.png')}
                                alt='...'
                                width={'28px'}
                                style={{ paddingBottom: '5px' }}
                            />
                            {'   '}
                            <span
                                style={{
                                    paddingLeft: '5px',
                                    fontSize: '22px',
                                    color: '#FF0000',
                                    fontWeight: 'bold',
                                    backgroundColor: '#FFF',
                                    borderRadius: '5px',
                                }}
                            >
                                Trang chủ {' '}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessDenied;
