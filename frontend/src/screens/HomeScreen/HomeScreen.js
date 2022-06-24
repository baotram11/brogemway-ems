import React from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';
import CarouselSlider from '../../components/CarouselSlider/CarouselSlider';
import { Helmet } from 'react-helmet';

// import './HomeScreen.scss';

const HomeScreen = () => {
	return (
		<div className='home-screen'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Brogemway</title>
			</Helmet>

			<header className='masthead'></header>

			<section className='page-section bg-light' id='portfolio'>
				<div className='container'>
					<div className='text-center'>
						<h2 className='section-heading text-uppercase mb-3 pt-5'>
							Sản phẩm
						</h2>
						<h3 className='section-subheading text-muted mb-4'>
							Bao gồm các sản phẩm thuộc thiết bị số, thời trang,
							giày và túi xách
						</h3>
					</div>
					<div>
						<Portfolio />
					</div>
				</div>
			</section>

			<section className='page-section bg-light' id='best-seller'>
				<div className='text-center'>
					<h2 className='section-heading text-uppercase mb-4 pt-5'>
						Sản phẩm bán chạy
					</h2>
				</div>
				<div className='row m-5'>
					<CarouselSlider />
				</div>
			</section>
		</div>
	);
};

export default HomeScreen;
