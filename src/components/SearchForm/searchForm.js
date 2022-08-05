import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/slices/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import {
	searchProByName,
	selectErrorPro,
	selectListProducts,
	selectStatusPro,
} from '../../store/slices/searchSlice';

const SearchForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// const [selectedOption, setSelectedOption] = useState(null);
	// const allProducts = useSelector(selectAllProducts);
	// let listNames = allProducts.map(({ ProID, ProName }) => ({
	//     value: ProID,
	//     label: ProName,
	// }));

	// const statusPro = useSelector(selectStatusPro);
	// const listProducts = useSelector(selectListProducts);
	// const errorPro = useSelector(selectErrorPro);

	// const [show, setShow] = useState(false);
	const [word, setWord] = useState(null);
	const handleSearch = () => {
		dispatch(searchProByName(word));
		return navigate(`/search?q=${word}`);
	};
	// useEffect(() => {
	// 	// if (selectedOption) {
	// 	//     navigate(`/products/${selectedOption.value}`);
	// 	//     return setSelectedOption(null);
	// 	// }
	// 	if (statusPro === 'succeeded') {
	// 		setShow(true);
	// 	}
	// }, [statusPro]);

	// const customStyles = {
	//     container: (provided) => ({
	//         ...provided,
	//         width: 360,
	//         height: 42,
	//         borderBottom: '1px solid #a58f98',
	//         border: 0,
	//     }),
	// };

	return (
		<div>
			<form action='#' className='form-box f-right'>
				<input
					type={'text'}
					name='Search'
					placeholder='Tìm kiếm sản phẩm'
					onChange={(e) => setWord(e.target.value)}
				/>
				<div className='search-icon' onClick={handleSearch}>
					<i className='fa-solid fa-magnifying-glass'></i>
				</div>
			</form>
			{/* {show ? (
				<ul className='submenu'>
					{listProducts.map((product) => (
						<li key={product.ProID}>
							<Link
								className='link'
								style={{ textDecoration: 'none' }}
								to={`/products/${product.ProID}`}
								key={product.CatID}>
								{product.ProName}
							</Link>
						</li>
					))}
				</ul>
			) : null} */}
		</div>
		// <Select
		// 	styles={customStyles}
		// 	className='form-box f-right'
		// 	onChange={setSelectedOption}
		// 	options={listNames}
		// 	autosize={false}
		// 	placeholder={'Tìm kiếm sản phẩm'}>
		// 	clearable={true}
		// </Select>
	);
};

export default SearchForm;
