import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    return (
        <div className='slider-area'>
            <div className='slider-active slick-initialized slick-slider'>
                <div className='slider-list draggable'>
                    <div className='slick-track' style={{ opacity: '1', width: '966px' }}>
                        <div
                            className='single-slider hero-overly1 slider-height d-flex align-items-center slider-bg1 slick-slide slick-current slick-active'
                            tabIndex={'0'}
                            style={{
                                width: '966px',
                                position: 'relative',
                                left: '0px',
                                top: '0px',
                                zIndex: '999',
                                opacity: '1',
                            }}
                            data-slick-index='0'
                            aria-hidden='false'
                        >
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-8 col-md-8'>
                                        <div className='hero__caption'>
                                            <span>Sản phẩm mới</span>
                                            <h1
                                                data-animation='fadeInUp'
                                                data-delay='.4s'
                                                style={{ animationDelay: '0.6s' }}
                                            >
                                                Thời trang mùa thu
                                            </h1>
                                            <p
                                                data-animation='fadeInUp'
                                                data-delay='.6s'
                                                style={{ animationDelay: '0.6s' }}
                                            >
                                                Chào mùa thu với các sản phẩm giữ ấm, được thiết kế mỏng nhẹ
                                                mang đến sự năng động cho bạn!
                                            </p>
                                            <div
                                                className='hero__btn'
                                                data-animation='fadeInUp'
                                                data-delay='.7s'
                                                style={{ animationDelay: '0.7s' }}
                                            >
                                                <Link
                                                    className='hero-btn'
                                                    to='/products'
                                                    tabIndex={'0'}
                                                    style={{ textDecoration: 'none', color: '#fff' }}
                                                >
                                                    Khám phá
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
