import React from 'react';
import Slider from 'react-slick';

const ImageSlider = (props) => {
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '300px',
        slidesToShow: 5,
        swipeToSlide: true
    };
    return (
        <div className='image-slider pt-5 ml-2 mr-2'>
            <Slider {...settings}>
                <div className='card-img-center'>
                    <img
                        src={require(`../../assets/images/products/${props.index}/2.png`)}
                        height='auto'
                        width={'100px'}
                        alt='...'
                    />
                </div>
                <div className='card-img-center'>
                    <img
                        src={require(`../../assets/images/products/${props.index}/3.png`)}
                        height='auto'
                        width={'100px'}
                        alt='...'
                    />
                </div>
                <div className='card-img-center'>
                    <img
                        src={require(`../../assets/images/products/${props.index}/4.png`)}
                        height='auto'
                        width={'100px'}
                        alt='...'
                    />
                </div>
                <div className='card-img-center'>
                    <img
                        src={require(`../../assets/images/products/${props.index}/5.png`)}
                        height='auto'
                        width={'100px'}
                        alt='...'
                    />
                </div>
                <div className='card-img-center'>
                    <img
                        src={require(`../../assets/images/products/${props.index}/6.png`)}
                        height='auto'
                        width={'100px'}
                        alt='...'
                    />
                </div>
                <div className='card-img-center'>
                    <img
                        src={require(`../../assets/images/products/${props.index}/7.png`)}
                        height='auto'
                        width={'100px'}
                        alt='...'
                    />
                </div>
            </Slider>
        </div>
    );
};

export default ImageSlider;
