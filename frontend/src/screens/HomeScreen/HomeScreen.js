import React from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';

// import './HomeScreen.scss';

const HomeScreen = () => {
	return (
		<div className='home-screen'>
			<header className='masthead'></header>

			<section className='page-section bg-light'>
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
					<Portfolio />
				</div>
			</section>
		</div>
	);
};

export default HomeScreen;
