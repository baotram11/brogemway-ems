import React from 'react';
import { Helmet } from 'react-helmet';
import GroupByCat from '../../components/GroupByCat/groupByCat';
import NavSlider from '../../components/NavSlider/navSlider';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';

const AllProducts = () => {
    const breadcrumb = { title: 'Sản phẩm', parentTitle: null };

    return (
        <div className='all-products'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <Header />

            <NavSlider {...breadcrumb} />

            <GroupByCat />

            <Footer />
        </div>
    );
};

export default AllProducts;
