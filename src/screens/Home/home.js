import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import PopularProducts from '../../components/PopularProducts/popularProducts';
import Header from '../../navigations/Header/header';
import HeroSlider from '../../components/HeroSlider/heroSlider';
import Footer from '../../navigations/Footer/footer';
import LikedProducts from '../../components/LikedProducts/likedProducts';
import OurSocial from '../../components/OurSocial/ourSocial';

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
            <OurSocial />
            <LikedProducts />

            <Footer />
        </div>
    );
};

export default Home;
