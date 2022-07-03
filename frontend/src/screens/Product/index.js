import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import CarouselSlider from '../../components/CarouselSlider';
import ProductDetail from '../../components/ProductDetail';

const Product = () => {
    const param = useParams();
    return (
        <div className='product-screen'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{param.id} &#9702; Brogemway</title>
            </Helmet>

            <ProductDetail props={param.id} />

            <div className='col p-5'>
                <section className='section text-center'>
                    <h3 className='section-heading text-uppercase pb-3 pt-5'>
                        Bạn có thể thích
                    </h3>
                    <CarouselSlider />
                </section>
            </div>
        </div>
    );
};

export default Product;
