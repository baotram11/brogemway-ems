import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import GroupByCat from '../../components/GroupByCat/groupByCat';
import NavSlider from '../../components/NavSlider/navSlider';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';

import {
	selectAllProducts,
	selectStatusList,
	selectErrorMessage,
	fetchProducts,
} from '../../store/slices/productSlice';

const AllProducts = () => {
	const breadcrumb = {
		title: 'Sản phẩm',
		titlePath: '#',
		parentTitle: null,
	};

	const dispatch = useDispatch();
	const allProducts = useSelector(selectAllProducts);
	const status = useSelector(selectStatusList);
	const errorMessage = useSelector(selectErrorMessage);

	useEffect(() => {
		console.log(status);
		if (status === 'idle') {
			dispatch(fetchProducts());
		}
	}, [status, dispatch]);

	return (
		<div className='all-products'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Sản phẩm &#9702; Brogemway</title>
			</Helmet>

			<Header />

			<NavSlider {...breadcrumb} />

			<GroupByCat {...{ status, allProducts, errorMessage }} />

			<Footer />
		</div>
	);
};

export default AllProducts;
