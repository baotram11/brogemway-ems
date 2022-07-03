import React from 'react';
import { Helmet } from 'react-helmet';
import Portfolio from '../../components/Portfolio';
import CarouselSlider from '../../components/CarouselSlider';

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
        </div>
    );
};

export default Home;
