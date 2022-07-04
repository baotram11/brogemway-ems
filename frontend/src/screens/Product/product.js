import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import CarouselSlider from '../../components/CarouselSlider/carouselSlider';
import ProductDetail from '../../components/ProductDetail/productDetail';

const Product = () => {
    const param = useParams();
    const apiUrl = 'http://localhost:5000/api/products/';
    const id = param.id;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data[0]);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    });
    return (
        <div className='product-screen'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{param.id} &#9702; Brogemway</title>
            </Helmet>

            <ProductDetail product={product} />

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
