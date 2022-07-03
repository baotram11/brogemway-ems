import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import actions from '../../store/actions';

import ProductList from '../../components/ProductList';

const AllProducts = React.memo((props) => {
    const { products } = props;

    return (
        <div className='allproducts'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Sản phẩm &#9702; Brogemway</title>
            </Helmet>

            <h2 className='section-heading text-uppercase text-center mb-3 mt-5'>
                Sản phẩm
            </h2>
            <ProductList products={products} />
        </div>
    );
});
const mapStateToProps = (state) => {
    return {
        products: state.product.products,
    };
};

export default connect(mapStateToProps, actions)(AllProducts);
