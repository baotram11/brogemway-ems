import React from 'react';
import { Helmet } from 'react-helmet';
import Portfolio from '../../components/Portfolio/portfolio';
import CarouselSlider from '../../components/CarouselSlider/carouselSlider';
import ContactUs from '../../components/ContactUs/contactUs';

const Home = () => {
    return (
        <div className='home'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Brogemway</title>
            </Helmet>

            <header className='masthead'></header>

            <section className='page-section bg-light' id='portfolio'>
                <Portfolio />
            </section>

            <section className='page-section bg-light' id='best-seller'>
                <CarouselSlider />
            </section>

            <section className='page-section bg-light' id='contact-us'>
                <ContactUs />
            </section>
        </div>
    );
};

export default Home;
