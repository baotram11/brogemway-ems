import React from 'react';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import { Helmet } from 'react-helmet';
import NavSlider from '../../components/NavSlider/navSlider';

const Checkout = () => {
    const breadcrumb = {
        title: 'Thanh toán',
        titlePath: 'checkout',
        parentTitle: null,
    };

    return (
        <div className='checkout'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Thanh toán &#9702; Brogemway</title>
            </Helmet>

            <Header />

            <NavSlider {...breadcrumb} />

            <Footer />
        </div>
    );
};

export default Checkout;
