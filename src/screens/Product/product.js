import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectStatus,
	selectErrorMessage,
	fetchProductByID,
	selectProduct,
} from '../../store/slices/productSlice';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import NavSlider from '../../components/NavSlider/navSlider';
import ProductDetail from '../../components/ProductDetail/productDetail';

const Product = () => {
	const param = useParams();
	const dispatch = useDispatch();

	const status = useSelector(selectStatus);
	const product = useSelector(selectProduct);
	const errorMessage = useSelector(selectErrorMessage);

	// const [title, setTitle] = useState(null);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchProductByID(param.id));
		}
		// if (product) {
		// 	setTitle(product[0].ProName);
		// }
		// const promise = dispatch(fetchProductByID(param.id));
		// return () => {
		// 	promise.abort();
		// };
	}, [status, dispatch, param, product]);

	const breadcrumb = { title: 'Chi tiết sản phẩm', parentTitle: 'Sản phẩm' };

	return (
		<div className='product-screen'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{param.id} &#9702; Brogemway</title>
			</Helmet>
			<Header />

			<NavSlider {...breadcrumb} />

			{status === 'loading' && (
				<div className='spinner-border text-secondary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			)}
			{status === 'failed' && <h5 style={{ color: 'red' }}>{errorMessage}</h5>}
			{status === 'succeeded' && <ProductDetail />}
			<Footer />
		</div>
	);
};

export default Product;
