import React from 'react';
import Slider from 'react-slick';

import './carouselSlider.scss';

// import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
// import { IoHeartOutline } from 'react-icons/io5';

const CarouselSlider = (props) => {
	const settings = {
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 5,
		swipeToSlide: true,
		afterChange: function (index) {
			console.log(
				`Slider Changed to: ${
					index + 1
				}, background: #222; color: #bada55`
			);
		},
	};
	return (
		<div className='carousel-slider ml-2 mr-2'>
			<Slider {...settings}>
				<div>
					<img
						src={require(`../../Assets/Images/products/${props.index}/2.png`)}
						width='60px'
						alt='...'
					/>
				</div>
				<div>
					<img
						src={require(`../../Assets/Images/products/${props.index}/3.png`)}
						width='60px'
						alt='...'
					/>
				</div>
				<div>
					<img
						src={require(`../../Assets/Images/products/${props.index}/4.png`)}
						width='60px'
						alt='...'
					/>
				</div>
				<div>
					<img
						src={require(`../../Assets/Images/products/${props.index}/5.png`)}
						width='60px'
						alt='...'
					/>
				</div>
				<div>
					<img
						src={require(`../../Assets/Images/products/${props.index}/6.png`)}
						width='60px'
						alt='...'
					/>
				</div>
				<div>
					<img
						src={require(`../../Assets/Images/products/${props.index}/7.png`)}
						width='60px'
						alt='...'
					/>
				</div>
			</Slider>
		</div>
	);
};

export default CarouselSlider;
