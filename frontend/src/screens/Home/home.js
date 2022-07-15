import React from 'react';
import { Helmet } from 'react-helmet';
import Portfolio from '../../components/Portfolio/portfolio';
import CarouselSlider from '../../components/CarouselSlider/carouselSlider';
import ContactUs from '../../components/ContactUs/contactUs';
import Header from '../../navigations/Header/header';
import { selectNewAccount } from '../../store/slices/accountSlice';
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector(selectNewAccount);

    return (
        <div className='home'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Brogemway</title>
            </Helmet>
            <Header />
            <header className='masthead'></header>
            <h2 className='hidden'>Xin chào, {user.Name}!</h2>
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
