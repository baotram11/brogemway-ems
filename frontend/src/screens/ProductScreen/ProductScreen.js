import { AiFillHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import CarouselSlider from '../../components/CarouselSlider/CarouselSlider';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// import './ProductScreen.scss';

const ProductScreen = () => {
    const param = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/products/${param.id}`)
            .then((res) => {
                setProduct(res.data);
                console.log('PRODUCT ' + param.id + ":" + res.data);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className='product-screen'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{product.ProName} &#9702; Brogemway</title>
            </Helmet>
            console.log(product)
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

            <div className='col p-5'>
                <section className='section text-center'>
                    <h3 className='section-heading text-uppercase pb-3 pt-5'>
                        Bạn có thể thích
                    </h3>
                    <CarouselSlider />
                </section>
            </div>
        </div>
    );
};

export default ProductScreen;
