import React from 'react';
import ImageSlider from '../../components/ImageSlider/imageSlider';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../store/slices/productSlice';
import { CurrencyConverter } from '../../utils/CurrencyConverter';

const ProductDetail = () => {
	const [product] = useSelector(selectProduct);

	return <div className='product-detail'></div>;
};

export default ProductDetail;
