import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts, selectErrorMessage, selectStatusList } from '../../store/slices/productSlice';
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
	const status = useSelector(selectStatusList);
	const errorMessage = useSelector(selectErrorMessage);

	return (
		<div className='carousel-slider ml-2 mr-2'>
			<div className='text-center'>
				<h2 className='section-heading text-uppercase mb-4 pt-5'>Sản phẩm bán chạy</h2>
			</div>
			<div className='row m-5'>
				<Slider {...settings}>
					<ProductList {...{ ...status, allProducts, errorMessage }} />
				</Slider>
			</div>
		</div>
	);
};

export default CarouselSlider;
