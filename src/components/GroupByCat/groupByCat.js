import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    fetchProductsByCatID,
    selectAllCategories,
    selectStatusCats,
} from '../../store/slices/categorySlice';
import NavSlider from '../NavSlider/navSlider';
import ProductList from '../ProductList/productList';

const GroupByCat = (props) => {
    const dispatch = useDispatch();
    const { catId, status, allProducts, errorMessage } = props;
    const status_Cats = useSelector(selectStatusCats);
    const categories = useSelector(selectAllCategories);

    console.log(status, allProducts, errorMessage);

    const [showBreadcrumb, setShowBreadcrumb] = useState(false);
    const [title, setTitle] = useState('Danh sách sản phẩm');
    const breadcrumb = {
        title: title,
        titlePath: '#',
        parentTitle: 'Sản phẩm',
        parentTitlePath: 'products',
    };

    useEffect(() => {
        console.log(catId);
        if (catId !== 0) {
            setTitle(categories.filter((cat) => cat.CatID === catId)[0].CatName);
            setShowBreadcrumb(true);
        }
    }, [categories, catId]);

    useEffect(() => {
        if (status === 'idle' && catId > 0) {
            dispatch(fetchProductsByCatID(catId));
        }
        if (status_Cats === 'idle') dispatch(fetchCategories);
    }, [status_Cats, dispatch, catId, status]);

    const [showError, setShowError] = useState(false);
    useEffect(() => {
        if (status === 'failed') setShowError(true);
    }, [status, setShowError]);

    return (
        <>
            {showBreadcrumb ? <NavSlider style={{ width: '100%' }} {...breadcrumb} /> : null}
            <div className='category-area'>
                <div className='container'>
                    <div className='row pb-4'>
                        <div className='col-xl-7 col-lg-8 col-md-10'>
                            <div className='section-tittle mb-50'>
                                <h2 className='mb-3'>Danh sách sản phẩm</h2>
                                <p>Bạn có thể lựa chọn xem theo danh mục, lọc theo giá tiền và thương hiệu.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {/* <div className='col-xl-3 col-lg-3 col-md-4'>
                        <div className='row'>
                            <div className='col-12 pt-3'>
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
                                                    <li key={'all'} data-value className='option selected focus'>
                                                        Tất cả
                                                    </li>
                                                    {categories.map((category) => (
                                                        <li key={category.CatID} data-value className='option'>
                                                            {category.CatName}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        {/* <div className='col-xl-9 col-lg-9 col-md-8 '>
                        <div className='row py-3'> */}
                        <div className='col-lg-12 py-3'>
                            <div className='count-job mb-35'>
                                <span style={{ fontWeight: 'bold' }}>
                                    {allProducts ? allProducts.length : 0} sản phẩm được tìm thấy
                                </span>
                                <div className='select-cat'>
                                    <span style={{ width: '172px' }}>Sắp xếp theo: </span>
                                    <select className='form-select' name='select'>
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
                    {showError ? (
                        <h2 style={{ color: 'red' }}>Không tìm thấy sản phẩm phù hợp.</h2>
                    ) : (
                        <ProductList
                            {...{
                                catId,
                                status,
                                allProducts,
                                errorMessage,
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default GroupByCat;
