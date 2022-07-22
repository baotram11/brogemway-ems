import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../store/slices/categorySlice';
import ProductList from '../ProductList/productList';

const GroupByCat = () => {
    const categories = useSelector(selectAllCategories);

    return (
        <div className='category-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-7 col-lg-8 col-md-10'>
                        <div className='section-tittle mb-50'>
                            <h2 className='mb-3'>Danh sách sản phẩm</h2>
                            <p>Bạn có thể lựa chọn xem theo danh mục, lọc theo giá tiền và thương hiệu.</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-4'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='small-tittle mb-45'>
                                    <span>
                                        <img
                                            className='icon'
                                            width={'32px'}
                                            height={'32px'}
                                            src={require('../../assets/images/icons/filter.png')}
                                            alt='...'
                                        />
                                        <h4
                                            className='text-center'
                                            style={{
                                                display: 'inline',
                                                paddingLeft: '10px',
                                            }}
                                        >
                                            Lọc sản phẩm
                                        </h4>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='category-listing mb-50'>
                            <div className='categories-wrapper'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='select-categories'>
                                            <select name='select1' style={{ display: 'none' }}>
                                                <option key={'all'} value={''}>
                                                    Tất cả
                                                </option>
                                                {categories.map((category) => (
                                                    <option key={category.CatID} value={''}>
                                                        {category.CatName}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className='select' tabIndex={'0'}>
                                                <span>Danh mục</span>
                                                <ul className='list'>
                                                    <li
                                                        key={'all'}
                                                        data-value
                                                        className='option selected focus'
                                                    >
                                                        Tất cả
                                                    </li>
                                                    {categories.map((category) => (
                                                        <li
                                                            key={category.CatID}
                                                            data-value
                                                            className='option'
                                                        >
                                                            {category.CatName}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='range-slider mt-50'>
                                <div className='small-tittle small-tittle2'>
                                    <h4>Mức giá</h4>
                                </div>
                                <div className='range_item'></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-9 col-lg-9 col-md-8 '>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='count-job mb-35'>
                                    <span>88 sản phẩm được tìm thấy</span>
                                    <div className='select-cat'>
                                        <span>Sắp xếp theo: </span>
                                        <select name='select' style={{ display: 'none' }}>
                                            <option key={'new'} value={''}>
                                                Sản phẩm mới nhất
                                            </option>
                                            <option key={'ascending'} value={''}>
                                                Giá tăng dần
                                            </option>
                                            <option key={'descending'} value={''}>
                                                Giá giảm dần
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupByCat;
