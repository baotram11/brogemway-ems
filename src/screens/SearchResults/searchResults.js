import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
	searchProByName,
	selectErrorPro,
	selectListProducts,
	selectStatusPro,
} from '../../store/slices/searchSlice';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import GroupByCat from '../../components/GroupByCat/groupByCat';
import NavSlider from '../../components/NavSlider/navSlider';

const SearchResults = () => {
	const breadcrumb = {
		title: 'Kết quả tìm kiếm',
		titlePath: '#',
		parentTitle: null,
	};

	const dispatch = useDispatch();

	const status = useSelector(selectStatusPro);
	const allProducts = useSelector(selectListProducts);
	const errorMessage = useSelector(selectErrorPro);

	let [searchParams, setSearchParams] = useSearchParams();
	const param = searchParams.get('q');

	useEffect(() => {
		if (status === 'idle') {
			dispatch(searchProByName(param));
		}
	}, [status, dispatch, param]);

	return (
		<div className='search-results'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Kết quả tìm kiếm &#9702; Brogemway</title>
			</Helmet>

			<Header />

			<NavSlider {...breadcrumb} />

			<GroupByCat {...{ status, allProducts, errorMessage }} />
			<Footer />
		</div>
	);
};

export default SearchResults;
