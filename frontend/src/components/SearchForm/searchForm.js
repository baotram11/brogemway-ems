import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/slices/productSlice';
import { useNavigate } from 'react-router-dom';
const stateOptions = [
	{ label: 'Alabama' },
	{ label: 'Alaska' },
	{ label: 'American Samoa' },
	{ label: 'Arizona' },
	{ label: 'Arkansas' },
	{ label: 'California' },
	{ label: 'Colorado' },
	{ label: 'Connecticut' },
	{ label: 'Delaware' },
	{ label: 'District Of Columbia' },
	{ label: 'Federated States Of Micronesia' },
	{ label: 'Florida' },
	{ label: 'Georgia' },
	{ label: 'Guam' },
	{ label: 'Hawaii' },
	{ label: 'Idaho' },
	{ label: 'Illinois' },
	{ label: 'Indiana' },
	{ label: 'Iowa' },
	{ label: 'Kansas' },
	{ label: 'Kentucky' },
	{ label: 'Louisiana' },
	{ label: 'Maine' },
	{ label: 'Marshall Islands' },
	{ label: 'Maryland' },
	{ label: 'Massachusetts' },
	{ label: 'Michigan' },
	{ label: 'Minnesota' },
	{ label: 'Mississippi' },
	{ label: 'Missouri' },
	{ label: 'Montana' },
	{ label: 'Nebraska' },
	{ label: 'Nevada' },
	{ label: 'New Hampshire' },
	{ label: 'New Jersey' },
	{ label: 'New Mexico' },
	{ label: 'New York' },
	{ label: 'North Carolina' },
	{ label: 'North Dakota' },
	{ label: 'Northern Mariana Islands' },
	{ label: 'Ohio' },
	{ label: 'Oklahoma' },
	{ label: 'Oregon' },
	{ label: 'Palau' },
	{ label: 'Pennsylvania' },
	{ label: 'Puerto Rico' },
	{ label: 'Rhode Island' },
	{ label: 'South Carolina' },
	{ label: 'South Dakota' },
	{ label: 'Tennessee' },
	{ label: 'Texas' },
	{ label: 'Utah' },
	{ label: 'Vermont' },
	{ label: 'Virgin Islands' },
	{ label: 'Virginia' },
	{ label: 'Washington' },
	{ label: 'West Virginia' },
	{ label: 'Wisconsin' },
	{ label: 'Wyoming' },
];
const SearchForm = () => {
	const navigate = useNavigate();

	const [selectedOption, setSelectedOption] = useState(null);

	const allProducts = useSelector(selectAllProducts);
	let listNames = allProducts.map(({ ProID, ProName }) => ({ value: ProID, label: ProName }));

	console.log(listNames);

	useEffect(() => {
		if (selectedOption) {
			navigate(`/products/${selectedOption.value}`);
			return setSelectedOption(null);
		}
	}, [selectedOption, navigate]);

	const customStyles = {
		container: (provided) => ({
			...provided,
			width: 360,
			height: 42,
			borderBottom: '1px solid #a58f98',
			// color: '#f2e1d9',
			border: 0,
		}),
	};
	return (
		// <form action='#' className='form-box f-right'>
		// 	<input type={'text'} name='Search' placeholder='Tìm kiếm sản phẩm' />
		// 	<div className='search-icon'>
		// 		<i className='fa-solid fa-magnifying-glass'></i>
		// 	</div>
		// </form>
		<Select
			styles={customStyles}
			className='form-box f-right'
			onChange={setSelectedOption}
			options={listNames}
			autosize={false}
			placeholder={'Tìm kiếm sản phẩm'}>
			clearable={true}
		</Select>
	);
};

export default SearchForm;
