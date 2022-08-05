import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import NavSlider from '../../components/NavSlider/navSlider';
import OurStory from '../../components/OurStory/ourStory';

const About = () => {
	const breadcrumb = { title: 'Về chúng tôi', parentTitle: null };

	return (
		<div className='about'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Về chúng tôi &#9702; Brogemway</title>
			</Helmet>

			<Header />

			<NavSlider {...breadcrumb} />
            
			<OurStory />

			<Footer />
		</div>
	);
};

export default About;
