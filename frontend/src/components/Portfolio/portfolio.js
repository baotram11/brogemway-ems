import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase mb-3 pt-5'>
                        Sản phẩm
                    </h2>
                    <h3 className='section-subheading text-muted mb-4'>
                        Bao gồm các sản phẩm thuộc thiết bị số, thời trang, giày
                        và túi xách
                    </h3>
                </div>
                <div>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-6 mb-4'>
                            <div className='portfolio-item'>
                                <Link className='portfolio-link' to='/products'>
                                    <div className='portfolio-hover'>
                                        <div className='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        className='img-fluid'
                                        src={require(`../../assets/images/portfolio/1.png`)}
                                        alt='...'
                                    />
                                </Link>
                                <div className='portfolio-caption'>
                                    <div className='portfolio-caption-heading'>
                                        Thiết bị số
                                    </div>
                                    <div className='portfolio-caption-subheading text-muted'>
                                        Điện thoại, máy tính
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-4'>
                            <div className='portfolio-item'>
                                <Link className='portfolio-link' to='/products'>
                                    <div className='portfolio-hover'>
                                        <div className='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        className='img-fluid'
                                        src={require(`../../assets/images/portfolio/2.png`)}
                                        alt='...'
                                    />
                                </Link>
                                <div className='portfolio-caption'>
                                    <div className='portfolio-caption-heading'>
                                        Giày tây
                                    </div>
                                    <div className='portfolio-caption-subheading text-muted'>
                                        Giày tây nam
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-4'>
                            <div className='portfolio-item'>
                                <Link className='portfolio-link' to='/products'>
                                    <div className='portfolio-hover'>
                                        <div className='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        className='img-fluid'
                                        src={require(`../../assets/images/portfolio/3.png`)}
                                        alt='...'
                                    />
                                </Link>
                                <div className='portfolio-caption'>
                                    <div className='portfolio-caption-heading'>
                                        Túi xách
                                    </div>
                                    <div className='portfolio-caption-subheading text-muted'>
                                        Túi xách thời trang
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-4 mb-lg-0'>
                            <div className='portfolio-item'>
                                <Link className='portfolio-link' to='/products'>
                                    <div className='portfolio-hover'>
                                        <div className='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        className='img-fluid'
                                        src={require(`../../assets/images/portfolio/4.png`)}
                                        alt='...'
                                    />
                                </Link>
                                <div className='portfolio-caption'>
                                    <div className='portfolio-caption-heading'>
                                        Áo
                                    </div>
                                    <div className='portfolio-caption-subheading text-muted'>
                                        Áo thun, áo sơ mi, áo khoác
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-4 mb-sm-0'>
                            <div className='portfolio-item'>
                                <Link className='portfolio-link' to='/products'>
                                    <div className='portfolio-hover'>
                                        <div className='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        className='img-fluid'
                                        src={require(`../../assets/images/portfolio/5.png`)}
                                        alt='...'
                                    />
                                </Link>
                                <div className='portfolio-caption'>
                                    <div className='portfolio-caption-heading'>
                                        Quần
                                    </div>
                                    <div className='portfolio-caption-subheading text-muted'>
                                        Quần tây, quần jean
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6'>
                            <div className='portfolio-item'>
                                <Link className='portfolio-link' to='/products'>
                                    <div className='portfolio-hover'>
                                        <div className='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        className='img-fluid'
                                        src={require(`../../assets/images/portfolio/6.png`)}
                                        alt='...'
                                    />
                                </Link>
                                <div className='portfolio-caption'>
                                    <div className='portfolio-caption-heading'>
                                        Giày thể thao
                                    </div>
                                    <div className='portfolio-caption-subheading text-muted'>
                                        Giày thể thao nam, nữ
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

export default Portfolio;
