import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../store/slices/categorySlice';
const PopularProducts = () => {
    const allCategories = useSelector(selectAllCategories);

    return (
        <section className='properties new-arrival fix'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-7 col-lg-8 col-md-10'>
                        <div
                            className='section-tittle mb-60 text-center wow fadeInUp'
                            data-wow-duration='1s'
                            data-wow-delay='.2s'
                            style={{
                                visibility: 'visible',
                                animationDuration: '1s',
                                animationDelay: '0.2s',
                                animationName: 'fadeInUp',
                            }}
                        >
                            <h2>Sản phẩm nổi bật</h2>
                            <p>
                                Những sản phẩm được yêu thích và lựa chọn nhiều
                                nhất!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='properties__button text-center'>
                            <nav>
                                <div
                                    className='nav nav-tabs'
                                    id='nav-tab'
                                    role={'tablist'}
                                >
                                    {allCategories.map((category) => (
                                        <NavLink
                                            className='nav-item nav-link'
                                            to={`/category/${category.CatID}`}
                                            key={category.CatID}
                                        >
                                            {category.CatName}
                                        </NavLink>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='tab-content' id='nav-tabContent'>
                        <div
                            className='tab-pane fade'
                            id='nav1'
                            role={'tabpanel'}
                            aria-labelledby='nav-1-tab'
                        >
                            <div className='row'>
                                <div className='col-lg-4 col-md-6 col-sm-6'></div>
                                <div className='col-lg-4 col-md-6 col-sm-6'></div>
                                <div className='col-lg-4 col-md-6 col-sm-6'></div>
                                <div className='col-lg-4 col-md-6 col-sm-6'></div>
                                <div className='col-lg-4 col-md-6 col-sm-6'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
