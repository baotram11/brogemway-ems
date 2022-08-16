import React from 'react';
import { Helmet } from 'react-helmet';
import CartDetail from '../../components/CartDetail/cartDetail';
import NavSlider from '../../components/NavSlider/navSlider';
import Footer from '../../navigations/Footer/footer';
import Header from '../../navigations/Header/header';

const Cart = () => {
    const breadcrumb = {
        title: 'Đơn hàng của bạn',
        titlePath: 'cart',
        parentTitle: null,
    };

    return (
        <div className='about'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Đơn hàng của bạn &#9702; Brogemway</title>
            </Helmet>

            <Header />

            <NavSlider {...breadcrumb} />

            <CartDetail />

            <Footer />
        </div>
    );
};

export default Cart;
