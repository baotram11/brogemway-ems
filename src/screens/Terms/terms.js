import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import NavSlider from '../../components/NavSlider/navSlider';
import OurStory from '../../components/OurStory/ourStory';

const Terms = () => {
	const breadcrumb = { title: 'Điều khoản & Dịch vụ', parentTitle: null };

	return (
		<div className='about'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Điều khoản - Dịch vụ &#9702; Brogemway</title>
			</Helmet>

			<Header />

			<NavSlider {...breadcrumb} />
            
			<OurStory />

			<Footer />
		</div>
	);
};

export default Terms;

