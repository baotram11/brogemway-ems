import React from 'react';
import { Link } from 'react-router-dom';

const NavSlider = (props) => {
	const title = props.title;
	const titlePath = props.titlePath;
	const parentTitle = props.parentTitle;
	const parentTitlePath = props.parentTitlePath;
	return (
		<div className='slider-area'>
			<div className='slider-active slick-initialized slick-slider'>
				<div className='slick-list draggable'>
					<div className='slick-track' style={{ opacity: '1', width: '100%' }}>
						<div
							className='w-100 single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2 slick-slide slick-current slick-active'
							tabIndex={'0'}
							style={{
								position: 'relative',
								left: '0px',
								top: '0px',
								zIndex: '999',
								opacity: '1',
							}}
							data-slick-index='0'
							aria-hidden='false'>
							<div className='container'>
								<div className='row'>
									<div className='col-xl-6 col-lg-8 col-md-8'>
										<div className='hero__caption hero__caption2'>
											<h1
												data-animation='fadeInUp'
												data-delay='.4s'
												style={{ animationDelay: '0.4s' }}>
												{title}
											</h1>
											<nav aria-label='breadcrumb'>
												<ol className='breadcrumb'>
													<li className='breadcrumb-item'>
														<Link className='link' to='/' tabIndex='0'>
															Trang chủ
														</Link>
													</li>
													{parentTitle ? (
														<li className='breadcrumb-item'>
															<Link
																className='link'
																to={`/${parentTitlePath}`}
																tabIndex='0'>
																{parentTitle}
															</Link>
														</li>
													) : null}
													<li className='breadcrumb-item'>
														<Link
															className='link'
															to={`/${titlePath}`}
															tabIndex='0'>
															{title}
														</Link>
													</li>
												</ol>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavSlider;
