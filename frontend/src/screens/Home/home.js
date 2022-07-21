import React from 'react';
import { Helmet } from 'react-helmet';

import PopularProducts from '../../components/PopularProducts/popularProducts';
import Header from '../../navigations/Header/header';
import HeroSlider from '../../components/HeroSlider/heroSlider';
import Footer from '../../navigations/Footer/footer';
import LikedProducts from '../../components/LikedProducts/likedProducts';

const Home = () => {
    return (
        <div className='home'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Brogemway</title>
            </Helmet>

            <Header />

            <HeroSlider />

            <PopularProducts />

            <LikedProducts />

            <Footer />
            {/* <header className='masthead'></header>
            <section className='page-section bg-light' id='portfolio'>
                <Portfolio />
            </section>

            <section className='page-section bg-light' id='best-seller'>
                <CarouselSlider />
            </section>

            <section className='page-section bg-light' id='contact-us'>
                <ContactUs />
            </section> */}
        </div>
    );
};

export default Home;
