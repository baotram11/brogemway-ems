import React, { useEffect } from 'react';
import ImageSlider from '../../components/ImageSlider/imageSlider';
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectProduct,
    selectStatus,
    selectErrorMessage,
    fetchProductByID,
} from '../../store/slices/productSlice';

const ProductDetail = (props) => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);
    const [product] = useSelector(selectProduct);

    console.log(status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductByID(props.id));
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        <p>'Loading...'</p>;
    } else if (status === 'failed') {
        <p>{errorMessage}</p>;
    }

    return (
        <div className='product-detail'>
            <div className='container'>
                <div className='card'>
                    <div className='row g-0'>
                        <div className='col-md-6 border-end'>
                            <div className='d-flex flex-column justify-content-center'>
                                <div className='main_image'>
                                    <img
                                        src={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                        id='main_product_image'
                                        width='100%'
                                        alt=''
                                    />
                                </div>
                                <div className='thumbnail_images'>
                                    <ImageSlider index={product.ProID} />
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='p-3 right-side'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h3>{product.ProName}</h3>
                                    <span className='heart'>
                                        <AiFillHeart />
                                    </span>
                                </div>
                                <div className='mt-2 pr-3 content'>
                                    <p>{product.Description}</p>
                                </div>
                                <h3>{product.Price}</h3>

                                <div className='mt-5'>
                                    <span className='fw-bold'>Color</span>
                                    <div className='colors'>
                                        <ul id='marker'>
                                            <li id='marker-1'></li>
                                            <li id='marker-2'></li>
                                            <li id='marker-3'></li>
                                            <li id='marker-4'></li>
                                            <li id='marker-5'></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='buttons d-flex flex-row mt-5 gap-3'>
                                    <button className='btn btn-outline-dark'>
                                        Mua ngay
                                    </button>
                                    <button className='btn btn-dark'>
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
