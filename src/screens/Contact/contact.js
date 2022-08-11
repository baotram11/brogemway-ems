import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import NavSlider from '../../components/NavSlider/navSlider';
import ContactUs from '../../components/ContactUs/contactUs';

const Contact = () => {
	const breadcrumb = {
		title: 'Liên hệ',
		titlePath: '#',
		parentTitle: null,
	};

	return (
		<div className='about'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Liên hệ &#9702; Brogemway</title>
			</Helmet>

			<Header />

			<NavSlider {...breadcrumb} />

			<ContactUs />

			<Footer />
		</div>
	);
};

export default Contact;
