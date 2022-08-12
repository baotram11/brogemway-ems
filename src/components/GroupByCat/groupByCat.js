import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCategories,
	fetchProductsByCatID,
	selectAllCategories,
	selectStatusCats,
} from '../../store/slices/categorySlice';
import ProductList from '../ProductList/productList';

const GroupByCat = (props) => {
	const dispatch = useDispatch();
	const { catId, status, allProducts, errorMessage } = props;
	const status_Cats = useSelector(selectStatusCats);
	const categories = useSelector(selectAllCategories);

	console.log(status, allProducts, errorMessage);

	useEffect(() => {
		console.log(catId);
		if (status === 'idle') {
			dispatch(fetchProductsByCatID(catId));
		}
		if (status_Cats === 'idle') dispatch(fetchCategories);
	}, [status_Cats, dispatch, catId, status]);

    
	const [showError, setShowError] = useState(false);
	useEffect(() => {
		if (status === 'failed') setShowError(true);
	}, [status, setShowError]);
    
	return (
		<div className='category-area'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-7 col-lg-8 col-md-10'>
						<div className='section-tittle mb-50'>
							<h2 className='mb-3'>Danh sách sản phẩm</h2>
							<p>Bạn có thể lựa chọn xem theo danh mục, lọc theo giá tiền và thương hiệu.</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-xl-3 col-lg-3 col-md-4'>
						<div className='row'>
							<div className='col-12'>
								<div className='small-tittle mb-45'>
									<span>
										<img
											className='icon'
											width={'32px'}
											height={'32px'}
											src={require('../../assets/images/icons/filter.png')}
											alt='...'
										/>
										<h4
											className='text-center'
											style={{
												display: 'inline',
												paddingLeft: '10px',
											}}>
											Lọc sản phẩm
										</h4>
									</span>
								</div>
							</div>
						</div>

						<div className='category-listing mb-50'>
							<div className='categories-wrapper'>
								<div className='row'>
									<div className='col-12'>
										<div className='select-categories'>
											<select name='select1' style={{ display: 'none' }}>
												<option key={'all'} value={''}>
													Tất cả
												</option>
												{categories.map((category) => (
													<option key={category.CatID} value={''}>
														{category.CatName}
													</option>
												))}
											</select>
											<div className='select' tabIndex={'0'}>
												<span>Danh mục</span>
												<ul className='list'>
													<li
														key={'all'}
														data-value
														className='option selected focus'>
														Tất cả
													</li>
													{categories.map((category) => (
														<li
															key={category.CatID}
															data-value
															className='option'>
															{category.CatName}
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='range-slider mt-50'>
								<div className='small-tittle small-tittle2'>
									<h4>Mức giá</h4>
								</div>
								<div className='range_item'></div>
							</div>
						</div>
					</div>
					<div className='col-xl-9 col-lg-9 col-md-8 '>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='count-job mb-35'>
									<span style={{ fontWeight: 'bold' }}>
										{allProducts ? allProducts.length : 0} sản phẩm được tìm thấy
									</span>
									<div className='select-cat'>
										<span>Sắp xếp theo: </span>
										<select name='select' style={{ display: 'none' }}>
											<option key={'new'} value={''}>
												Sản phẩm mới nhất
											</option>
											<option key={'ascending'} value={''}>
												Giá tăng dần
											</option>
											<option key={'descending'} value={''}>
												Giá giảm dần
											</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						{showError ? (
							<h2 style={{ color: 'red' }}>Không tìm thấy sản phẩm phù hợp.</h2>
						) : (
							<ProductList {...{ status, allProducts, errorMessage }} />
						)}
					</div>
				</div>
			</div>
		</div>
		// <div className='category-area'>
		//     <div className='container'>
		//         <div className='row'>
		//             <div className='col-xl-7 col-lg-8 col-md-10'>
		//                 <div className='section-tittle mb-50'>
		//                     <h2>Shop with us</h2>
		//                     <p>Browse from 230 latest items</p>
		//                 </div>
		//             </div>
		//         </div>
		//         <div className='row'>
		//             <div className='col-xl-3 col-lg-3 col-md-4 '>
		//                 <div className='row'>
		//                     <div className='col-12'>
		//                         <div className='small-tittle mb-45'>
		//                             <div className='ion'>
		//                                 {' '}
		//                                 <svg
		//                                     xmlns='http://www.w3.org/2000/svg'
		//                                     xmlnsXlink='http://www.w3.org/1999/xlink'
		//                                     width='20px'
		//                                     height='12px'
		//                                 >
		//                                     <path
		//                                         fill-rule='evenodd'
		//                                         fill='rgb(27, 207, 107)'
		//                                         d='M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z'
		//                                     ></path>
		//                                 </svg>
		//                             </div>
		//                             <h4>Filter Product</h4>
		//                         </div>
		//                     </div>
		//                 </div>

		//                 <div className='category-listing mb-50'>
		//                     <div className='categories-wrapper'>
		//                         <div className='row'>
		//                             <div className='col-12'>
		//                                 <div className='select-categories'>
		//                                     <select
		//                                         name='select1'
		//                                         style={{ display: 'none' }}
		//                                     >
		//                                         <option value=''>Type</option>
		//                                     </select>
		//                                     <div
		//                                         className='nice-select'
		//                                         tabIndex='0'
		//                                     >
		//                                         <span className='current'>
		//                                             Table
		//                                         </span>
		//                                         <ul className='list'>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option focus'
		//                                             >
		//                                                 Type
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option selected'
		//                                             >
		//                                                 Điện thoại
		//                                             </li>
		//                                         </ul>
		//                                     </div>
		//                                 </div>
		//                             </div>
		//                             <div className='col-12'>
		//                                 <div className='select-categories'>
		//                                     <select
		//                                         name='select2'
		//                                         style={{ display: 'none' }}
		//                                     >
		//                                         <option value=''>Size</option>
		//                                         <option value=''>2.2ft</option>
		//                                         <option value=''>5.5ft</option>
		//                                         <option value=''>8.2ft</option>
		//                                         <option value=''>10.2ft</option>
		//                                     </select>
		//                                     <div
		//                                         className='nice-select'
		//                                         tabIndex='0'
		//                                     >
		//                                         <span className='current'>
		//                                             Size
		//                                         </span>
		//                                         <ul className='list'>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option selected focus'
		//                                             >
		//                                                 Size
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 2.2ft
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 5.5ft
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 8.2ft
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 10.2ft
		//                                             </li>
		//                                         </ul>
		//                                     </div>
		//                                 </div>
		//                             </div>
		//                             <div className='col-12'>
		//                                 <div className='select-categories'>
		//                                     <select
		//                                         name='select3'
		//                                         style={{ display: 'none' }}
		//                                     >
		//                                         <option value=''>Color</option>
		//                                         <option value=''>Whit</option>
		//                                         <option value=''>Green</option>
		//                                         <option value=''>Blue</option>
		//                                         <option value=''>
		//                                             Sky Blue
		//                                         </option>
		//                                         <option value=''>Gray</option>
		//                                     </select>
		//                                     <div
		//                                         className='nice-select'
		//                                         tabIndex='0'
		//                                     >
		//                                         <span className='current'>
		//                                             Color
		//                                         </span>
		//                                         <ul className='list'>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option selected'
		//                                             >
		//                                                 Color
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 Whit
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 Green
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 Blue
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 Sky Blue
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 Gray
		//                                             </li>
		//                                         </ul>
		//                                     </div>
		//                                 </div>
		//                             </div>
		//                             <div className='col-12'>
		//                                 <div className='select-categories'>
		//                                     <select
		//                                         name='select4'
		//                                         style={{ display: 'none' }}
		//                                     >
		//                                         <option value=''>
		//                                             Price range
		//                                         </option>
		//                                         <option value=''>
		//                                             $10 to $20
		//                                         </option>
		//                                         <option value=''>
		//                                             $20 to $30
		//                                         </option>
		//                                         <option value=''>
		//                                             $50 to $80
		//                                         </option>
		//                                         <option value=''>
		//                                             $100 to $120
		//                                         </option>
		//                                         <option value=''>
		//                                             $200 to $300
		//                                         </option>
		//                                         <option value=''>
		//                                             $500 to $600
		//                                         </option>
		//                                     </select>
		//                                     <div
		//                                         className='nice-select'
		//                                         tabIndex='0'
		//                                     >
		//                                         <span className='current'>
		//                                             Price range
		//                                         </span>
		//                                         <ul className='list'>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option selected focus'
		//                                             >
		//                                                 Price range
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 $10 to $20
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 $20 to $30
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 $50 to $80
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 $100 to $120
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 $200 to $300
		//                                             </li>
		//                                             <li
		//                                                 data-value=''
		//                                                 className='option'
		//                                             >
		//                                                 $500 to $600
		//                                             </li>
		//                                         </ul>
		//                                     </div>
		//                                 </div>
		//                             </div>
		//                         </div>
		//                     </div>

		//                     <div className='range-slider mt-50'>
		//                         <div className='small-tittle small-tittle2'>
		//                             <h4>Price Range</h4>
		//                         </div>
		//                         <div className='range_item'>
		//                             <span className='irs js-irs-0'>
		//                                 <span className='irs'>
		//                                     <span
		//                                         className='irs-line'
		//                                         tabIndex='-1'
		//                                     >
		//                                         <span className='irs-line-left'></span>
		//                                         <span className='irs-line-mid'></span>
		//                                         <span className='irs-line-right'></span>
		//                                     </span>
		//                                     <span
		//                                         className='irs-min'
		//                                         style={{
		//                                             visibility: 'visible',
		//                                         }}
		//                                     >
		//                                         tk. 0
		//                                     </span>
		//                                     <span
		//                                         className='irs-max'
		//                                         style={{
		//                                             visibility: 'visible',
		//                                         }}
		//                                     >
		//                                         tk. 1.000
		//                                     </span>
		//                                     <span
		//                                         className='irs-from'
		//                                         style={{
		//                                             visibility: 'visible',
		//                                             left: '0%',
		//                                         }}
		//                                     >
		//                                         tk. 0
		//                                     </span>
		//                                     <span
		//                                         className='irs-to'
		//                                         style={{
		//                                             visibility: 'visible',
		//                                             left: '40.3704%',
		//                                         }}
		//                                     >
		//                                         tk. 500
		//                                     </span>
		//                                     <span
		//                                         className='irs-single'
		//                                         style={{
		//                                             visibility: 'visible',
		//                                             left: '11.1111%',
		//                                         }}
		//                                     >
		//                                         tk. 0 - tk. 500
		//                                     </span>
		//                                 </span>
		//                                 <span className='irs-grid'></span>
		//                                 <span
		//                                     className='irs-bar'
		//                                     style={{
		//                                         width: '47.2222%',
		//                                         left: '2.77778%',
		//                                     }}
		//                                 ></span>
		//                                 <span
		//                                     className='irs-shadow shadow-from'
		//                                     style={{ display: 'none' }}
		//                                 ></span>
		//                                 <span
		//                                     className='irs-shadow shadow-to'
		//                                     style={{ display: 'none' }}
		//                                 ></span>
		//                                 <span
		//                                     className='irs-slider from'
		//                                     style={{ left: '0%' }}
		//                                 ></span>
		//                                 <span
		//                                     className='irs-slider to type_last'
		//                                     style={{ left: '47.2222%;' }}
		//                                 ></span>
		//                             </span>
		//                             <input
		//                                 type='text'
		//                                 className='js-range-slider irs-hidden-input'
		//                                 value=''
		//                                 readonly=''
		//                             />
		//                             <div className='d-flex align-items-center'>
		//                                 <div className='price_text'>
		//                                     <p>Price :</p>
		//                                 </div>
		//                                 <div className='price_value d-flex justify-content-center'>
		//                                     <input
		//                                         type='text'
		//                                         className='js-input-from'
		//                                         id='amount'
		//                                         readonly=''
		//                                     />
		//                                     <span>to</span>
		//                                     <input
		//                                         type='text'
		//                                         className='js-input-to'
		//                                         id='amount'
		//                                         readonly=''
		//                                     />
		//                                 </div>
		//                             </div>
		//                         </div>
		//                     </div>

		//                     <div className='select-checkbox mt-30 mb-30'>
		//                         <div className='small-tittle'>
		//                             <h4>Latest Product</h4>
		//                         </div>
		//                         <label className='container'>
		//                             Any
		//                             <input type='checkbox' />
		//                             <span className='checkmark'></span>
		//                         </label>
		//                         <label className='container'>
		//                             Today
		//                             <input type='checkbox' checked='' />
		//                             <span className='checkmark'></span>
		//                         </label>
		//                         <label className='container'>
		//                             Last 2 days
		//                             <input type='checkbox' />
		//                             <span className='checkmark'></span>
		//                         </label>
		//                         <label className='container'>
		//                             Last 5 days
		//                             <input type='checkbox' />
		//                             <span className='checkmark'></span>
		//                         </label>
		//                         <label className='container'>
		//                             Last 10 days
		//                             <input type='checkbox' />
		//                             <span className='checkmark'></span>
		//                         </label>
		//                         <label className='container'>
		//                             Last 15 days
		//                             <input type='checkbox' />
		//                             <span className='checkmark'></span>
		//                         </label>
		//                     </div>
		//                 </div>
		//             </div>

		//             <div className='col-xl-9 col-lg-9 col-md-8 '>
		//                 <div className='row'>
		//                     <div className='col-lg-12'>
		//                         <div className='count-job mb-35'>
		//                             <span>39, 782 Product found</span>

		//                             <div className='select-cat'>
		//                                 <span>Sort by</span>
		//                                 <select
		//                                     name='select'
		//                                     style={{ display: 'none' }}
		//                                 >
		//                                     <option value=''>Type</option>
		//                                 </select>
		//                                 <div
		//                                     className='nice-select'
		//                                     tabIndex='0'
		//                                 >
		//                                     <span className='current'>
		//                                         Sofa
		//                                     </span>
		//                                     <ul className='list'>
		//                                         <li
		//                                             data-value=''
		//                                             className='option selected'
		//                                         >
		//                                             Sofa
		//                                         </li>
		//                                         <li
		//                                             data-value=''
		//                                             className='option'
		//                                         >
		//                                             Table
		//                                         </li>
		//                                         <li
		//                                             data-value=''
		//                                             className='option'
		//                                         >
		//                                             Chair
		//                                         </li>
		//                                         <li
		//                                             data-value=''
		//                                             className='option'
		//                                         >
		//                                             Bead
		//                                         </li>
		//                                         <li
		//                                             data-value=''
		//                                             className='option'
		//                                         >
		//                                             Lightning
		//                                         </li>
		//                                         <li
		//                                             data-value=''
		//                                             className='option'
		//                                         >
		//                                             Decore
		//                                         </li>
		//                                     </ul>
		//                                 </div>
		//                             </div>
		//                         </div>
		//                     </div>
		//                 </div>

		//                 {!showError ? (
		//                     <ProductList
		//                         {...{ status, allProducts, errorMessage }}
		//                     />
		//                 ) : null}
		//             </div>
		//         </div>
		//     </div>
		// </div>
	);
};

export default GroupByCat;
