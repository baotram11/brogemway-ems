import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-wapper'>
            <div className='footer-area footer-padding'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-xl-4 col-lg-3 col-md-8 col-sm-8'>
                            <div className='single-footer-caption mb-50'>
                                <div className='single-footer-caption mb-30'>
                                    <div className='footer-logo'>
                                        <Link className='link' to='/'>
                                            <img
                                                width={'200px'}
                                                height={'200px'}
                                                src={require('../../assets/images/logos/bgw-transparent.png')}
                                                alt='...'
                                            />
                                        </Link>
                                    </div>
                                    <div className='footer-title'>
                                        <div className='footer-pera'>
                                            <p>
                                                Brogemway giới thiệu đến các bạn những sản phẩm thuộc các mặt
                                                hàng như thiết bị số, thời trang nam nữ như quần áo, giày tây,
                                                giày thể thao, và túi xách. Chúc bạn có một trải nghiệm tốt
                                                khi sử dụng dịch vụ của chúng tôi.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='footer-social pl-35'>
                                        <Link className='link' to='#'>
                                            <i class='fa-brands fa-facebook-f'></i>
                                        </Link>
                                        <Link className='link' to='#'>
                                            <i class='fa-brands fa-youtube'></i>
                                        </Link>
                                        <Link className='link' to='#'>
                                            <i class='fa-brands fa-instagram'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-sm-4'>
                            <div className='single-footer-caption mb-50 mt-50'>
                                <div className='footer-tittle'>
                                    <h4>Tìm hiểu thêm</h4>
                                    <ul>
                                        <li>
                                            <Link className='link' to='/'>
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='link' to='/about'>
                                                Về chúng tôi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='link' to='/contact'>
                                                Liên hệ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-sm-4'>
                            <div className='single-footer-caption mb-50 mt-50'>
                                <div className='footer-tittle'>
                                    <h4>Danh mục</h4>
                                    <ul>
                                        <li>
                                            <Link className='link' to='/category/1'>
                                                Thiết bị số
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='link' to='/category/3'>
                                                Thời trang
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='link' to='/category/4'>
                                                Túi xách
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-sm-4'>
                            <div className='single-footer-caption mb-50 mt-50'>
                                <div className='footer-tittle'>
                                    <h4>Điều khoản</h4>
                                    <ul>
                                        <li>
                                            <Link className='link' to='/term'>
                                                Điều khoản
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='link' to='/about'>
                                                Cửa hàng
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='link' to='/contact'>
                                                Dịch vụ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-bottom-area'>
                <div className='container'>
                    <div className='footer-border'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-xl-12'>
                                <div className='footer-copy-right text-center'>
                                    <p>
                                        Copyright ©2022 All rights reserved | Brogemway{' '}
                                        <i class="fa-solid fa-meteor"></i>
                                        {' '}2019
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
