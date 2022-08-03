import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../store/slices/productSlice';
import { CurrencyConverter } from '../../utils/CurrencyConverter';
import { selectAllCategories } from '../../store/slices/categorySlice';

const ProductDetail = () => {
	const [product] = useSelector(selectProduct);
	const categories = useSelector(selectAllCategories);

	return (
		<div className='product_image_area section-padding40'>
			<div className='container'>
				<div className='row s_product_inner'>
					<div className='col-lg-5'>
						<div className='product_slider_img'>
							<div className='lSSlideOuter'>
								<div
									className='lSSlideWapper'
									style={{ transitionDuration: '600ms', transitionTimingFunction: 'ease' }}>
									<div
										id='vertical'
										className='lightSlider lsGrab lSSlide'
										style={{
											width: '1880px',
											height: '360px',
											paddingBottom: '0%',
											transform: 'translate3d(0px, 0px, 0px)',
										}}>
										<div
											className='lslide active'
											style={{ width: '470px', marginRight: '0px' }}
											data-thumb={require(`../../assets/images/products/${product.ProID}/1.png`)}>
											<img
												className='w-100'
												src={require(`../../assets/images/products/${product.ProID}/1.png`)}
												alt='...'
											/>
										</div>
										<div
											className='lslide'
											style={{ width: '470px', marginRight: '0px' }}
											data-thumb={require(`../../assets/images/products/${product.ProID}/2.png`)}>
											<img
												className='w-100'
												src={require(`../../assets/images/products/${product.ProID}/2.png`)}
												alt='...'
											/>
										</div>
										<div
											className='lslide'
											style={{ width: '470px', marginRight: '0px' }}
											data-thumb={require(`../../assets/images/products/${product.ProID}/3.png`)}>
											<img
												className='w-100'
												src={require(`../../assets/images/products/${product.ProID}/3.png`)}
												alt='...'
											/>
										</div>
										<div
											className='lslide'
											style={{ width: '470px', marginRight: '0px' }}
											data-thumb={require(`../../assets/images/products/${product.ProID}/4.png`)}>
											<img
												className='w-100'
												src={require(`../../assets/images/products/${product.ProID}/4.png`)}
												alt='...'
											/>
										</div>
										<div
											className='lslide'
											style={{ width: '470px', marginRight: '0px' }}
											data-thumb={require(`../../assets/images/products/${product.ProID}/5.png`)}>
											<img
												className='w-100'
												src={require(`../../assets/images/products/${product.ProID}/5.png`)}
												alt='...'
											/>
										</div>
										<div
											className='lslide'
											style={{ width: '470px', marginRight: '0px' }}
											data-thumb={require(`../../assets/images/products/${product.ProID}/6.png`)}>
											<img
												className='w-100'
												src={require(`../../assets/images/products/${product.ProID}/6.png`)}
												alt='...'
											/>
										</div>
										<div
											className='lslide'
											style={{ width: '470px', marginRight: '0px' }}
											data-thumb={require(`../../assets/images/products/${product.ProID}/7.png`)}>
											<img
												className='w-100'
												src={require(`../../assets/images/products/${product.ProID}/7.png`)}
												alt='...'
											/>
										</div>
									</div>
								</div>
								<ul
									className='lSPager lSGallery'
									style={{
										marginTop: '5px',
										transitionDuration: '600ms',
										width: '475px',
										transform: 'translate3d(0px, 0px, 0px)',
									}}>
									<li
										className='active'
										style={{ width: '100%', minWidth: '114px', marginRight: '5px' }}>
										<Link to='#'>
											<img
												src={require(`../../assets/images/products/${product.ProID}/1.png`)}
												alt='...'
											/>
										</Link>
									</li>
									<li style={{ width: '100%', minWidth: '114px', marginRight: '5px' }}>
										<Link to='#'>
											<img
												src={require(`../../assets/images/products/${product.ProID}/2.png`)}
												alt='...'
											/>
										</Link>
									</li>
									<li style={{ width: '100%', minWidth: '114px', marginRight: '5px' }}>
										<Link to='#'>
											<img
												src={require(`../../assets/images/products/${product.ProID}/3.png`)}
												alt='...'
											/>
										</Link>
									</li>
									<li style={{ width: '100%', minWidth: '114px', marginRight: '5px' }}>
										<Link to='#'>
											<img
												src={require(`../../assets/images/products/${product.ProID}/4.png`)}
												alt='...'
											/>
										</Link>
									</li>
									<li style={{ width: '100%', minWidth: '114px', marginRight: '5px' }}>
										<Link to='#'>
											<img
												src={require(`../../assets/images/products/${product.ProID}/5.png`)}
												alt='...'
											/>
										</Link>
									</li>
									<li style={{ width: '100%', minWidth: '114px', marginRight: '5px' }}>
										<Link to='#'>
											<img
												src={require(`../../assets/images/products/${product.ProID}/6.png`)}
												alt='...'
											/>
										</Link>
									</li>
									<li style={{ width: '100%', minWidth: '114px', marginRight: '5px' }}>
										<Link to='#'>
											<img
												src={require(`../../assets/images/products/${product.ProID}/7.png`)}
												alt='...'
											/>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-5 offset-lg-1'>
						<div className='s_product_text'>
							<h3>{product.ProName}</h3>
							<h2>{CurrencyConverter(product.Price)}</h2>
							<ul className='list'>
								<li>
									<Link to='#' className='active'>
										<span>Danh mục:</span> {categories[product.CatID].CatName}
									</Link>
								</li>
								<li>
									<Link to='#' className='active'>
										<span>Tình trạng:</span> Còn hàng
									</Link>
								</li>
							</ul>
							{product.Description}
							<div className='card_area'>
								<div className='product_count d-inline-block'>
									<span className='inumber-decrement'>
										<i className='fa-solid fa-minus'></i>
									</span>
									<input
										className='input-number'
										type={'number'}
										value={'1'}
										min={'0'}
										max={'10'}
									/>
									<span className='number-increment'>
										<i className='fa-solid fa-plus'></i>
									</span>
								</div>
								<div className='add_to_cart'>
									<Link to='#' className='btn'>
										Thêm vào giỏ hàng
									</Link>
									<Link to='#' className='like_us'>
										<i className='fa fa-heart-o' aria-hidden='true'></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
