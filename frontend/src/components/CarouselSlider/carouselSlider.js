import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/slices/productSlice';
import Slider from 'react-slick';
import ProductList from '../../components/ProductList/productList';

const CarouselSlider = () => {
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 5,
        swipeToSlide: true,
    };

    const allProducts = useSelector(selectAllProducts);

    return (
        <div className='carousel-slider ml-2 mr-2'>
            <div className='text-center'>
                <h2 className='section-heading text-uppercase mb-4 pt-5'>Sản phẩm bán chạy</h2>
            </div>
            <div className='row m-5'>
                <Slider {...settings}>
                    <ProductList />
                    {/* {allProducts.map((product) => (
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            to={{
                                pathname: `/products/${product.ProID}`,
                                hach: '#',
                            }}
                            key={product.ProID}
                            className='d-flex align-items-stretch'
                        >
                            <div className='card mb-4 ml-2' style={{ width: '18rem' }}>
                                <img
                                    style={{ height: '120%' }}
                                    className='item-image card-img-center img-fluid'
                                    src={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                    alt='...'
                                />

                                <div className='card-footer'>
                                    <h5 className='text-truncate align-text-center'>{product.ProName}</h5>
                                    <p className='mb-2 pl-4 text-truncate align-text-center'>
                                        {product.Price}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))} */}
                </Slider>
            </div>
        </div>
    );
};

export default CarouselSlider;
