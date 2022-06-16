import React from 'react';
import { BsPlusLg} from 'react-icons/bs';

import Header from '../../Layouts/Header/header';

const Home = () => {
    return (
        <div className='home'>
            <Header />

            <section class='page-section bg-light' id='portfolio'>
                <div class='container'>
                    <div class='text-center'>
                        <h2 class='section-heading text-uppercase mb-3 pt-5'>
                            Sản phẩm
                        </h2>
                        <h3 class='section-subheading text-muted mb-4'>
                            Bao gồm các sản phẩm thuộc thiết bị số, thời trang,
                            giày và túi xách
                        </h3>
                    </div>
                    <div class='row'>
                        <div class='col-lg-4 col-sm-6 mb-4'>
                            {/* <!-- Portfolio item 1--> */}
                            <div class='portfolio-item'>
                                <a class='portfolio-link' href='/products'>
                                    <div class='portfolio-hover'>
                                        <div class='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        class='img-fluid'
                                        src={require(`../../Assets/Images/portfolio/1.png`)}
                                        alt='...'
                                    />
                                </a>
                                <div class='portfolio-caption'>
                                    <div class='portfolio-caption-heading'>
                                        Thiết bị số
                                    </div>
                                    <div class='portfolio-caption-subheading text-muted'>
                                        Điện thoại, máy tính
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-4 col-sm-6 mb-4'>
                            {/* <!-- Portfolio item 2--> */}
                            <div class='portfolio-item'>
                                <a class='portfolio-link' href='/products'>
                                    <div class='portfolio-hover'>
                                        <div class='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        class='img-fluid'
                                        src={require(`../../Assets/Images/portfolio/2.png`)}
                                        alt='...'
                                    />
                                </a>
                                <div class='portfolio-caption'>
                                    <div class='portfolio-caption-heading'>
                                        Giày tây
                                    </div>
                                    <div class='portfolio-caption-subheading text-muted'>
                                        Giày tây nam
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-4 col-sm-6 mb-4'>
                            {/* <!-- Portfolio item 3--> */}
                            <div class='portfolio-item'>
                                <a class='portfolio-link' href='/products'>
                                    <div class='portfolio-hover'>
                                        <div class='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        class='img-fluid'
                                        src={require(`../../Assets/Images/portfolio/3.png`)}
                                        alt='...'
                                    />
                                </a>
                                <div class='portfolio-caption'>
                                    <div class='portfolio-caption-heading'>
                                        Túi xách
                                    </div>
                                    <div class='portfolio-caption-subheading text-muted'>
                                        Túi xách thời trang
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-4 col-sm-6 mb-4 mb-lg-0'>
                            {/* <!-- Portfolio item 4--> */}
                            <div class='portfolio-item'>
                                <a class='portfolio-link' href='/products'>
                                    <div class='portfolio-hover'>
                                        <div class='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        class='img-fluid'
                                        src={require(`../../Assets/Images/portfolio/4.png`)}
                                        alt='...'
                                    />
                                </a>
                                <div class='portfolio-caption'>
                                    <div class='portfolio-caption-heading'>
                                        Áo
                                    </div>
                                    <div class='portfolio-caption-subheading text-muted'>
                                        Áo thun, áo sơ mi, áo khoác
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-4 col-sm-6 mb-4 mb-sm-0'>
                            {/* <!-- Portfolio item 5--> */}
                            <div class='portfolio-item'>
                                <a class='portfolio-link' href='/products'>
                                    <div class='portfolio-hover'>
                                        <div class='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        class='img-fluid'
                                        src={require(`../../Assets/Images/portfolio/5.png`)}
                                        alt='...'
                                    />
                                </a>
                                <div class='portfolio-caption'>
                                    <div class='portfolio-caption-heading'>
                                        Quần
                                    </div>
                                    <div class='portfolio-caption-subheading text-muted'>
                                        Quần tây, quần jean
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-4 col-sm-6'>
                            {/* <!-- Portfolio item 6--> */}
                            <div class='portfolio-item'>
                                <a class='portfolio-link' href='/products'>
                                    <div class='portfolio-hover'>
                                        <div class='portfolio-hover-content'>
                                            <BsPlusLg size={56} />
                                        </div>
                                    </div>
                                    <img
                                        class='img-fluid'
                                        src={require(`../../Assets/Images/portfolio/6.png`)}
                                        alt='...'
                                    />
                                </a>
                                <div class='portfolio-caption'>
                                    <div class='portfolio-caption-heading'>
                                        Giày thể thao
                                    </div>
                                    <div class='portfolio-caption-subheading text-muted'>
                                        Giày thể thao nam, nữ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
