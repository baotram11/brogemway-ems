import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllProducts,
    selectStatusList,
    fetchProducts,
} from '../../store/slices/productSlice';
import CarouselSlider from '../CarouselSlider/carouselSlider';

const LikedProducts = () => {
    const [index, setIndex] = useState(1);
    const dispatch = useDispatch();

    const allProducts = useSelector(selectAllProducts);
    const status = useSelector(selectStatusList);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }

        if (!allProducts) {
            setIndex(Math.floor(Math.random() * allProducts.length) + 1);
            console.log(index);
        }
    }, [index, allProducts, status, dispatch]);

    return (
        <section className='new-arrival new-arrival2'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-6 col-lg-8 col-md-10'>
                        <div
                            className='section-tittle mb-60 text-center wow fadeInUp'
                            data-wow-duration='2s'
                            data-wow-delay='.2s'
                            style={{
                                visibility: 'visible',
                                animationDuration: '1s',
                                animationDelay: '0.2s',
                                animationName: 'fadeInUp',
                            }}
                        >
                            <h2>Bạn có thể thích</h2>
                            <p>
                                Những sản phẩm thuộc tất cả các thể loại từ thời
                                trang, phụ kiện, giày, ngoài ra bạn có thể tìm
                                thấy những sản phẩm thiết bị số ở cửa hàng chúng
                                tôi, mong bạn sẽ thích thú và chọn mua chúng.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'></div>
            </div>
        </section>
    );
};

export default LikedProducts;
