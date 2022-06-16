import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header/header';

const ProductList = (props) => {
	const { products } = props;

	return (
		<div className='product-list text-center'>
			<Header />
			<h2 class='section-heading text-uppercase mb-3 pt-5'>Sản phẩm</h2>

			<div className='row m-5'>
				{products.map((product) => (
					<Link
						style={{ textDecoration: 'none', color: 'black' }}
						to={`/products/${product.ProID}`}
						key={product.ProID}
						className='col d-flex align-items-stretch'
					>
						<div className='card mb-4' style={{ width: '18rem' }}>
							<img
								style={{ height: '120%' }}
								className='item-image card-img-center img-fluid'
								src={require(`../../Assets/Images/products/${product.ProID}/1.png`)}
								alt='...'
							/>

							<div className='card-footer'>
								<h4 className='text-truncate align-text-center'>
									{product.ProName}
								</h4>
								<p className='mb-2 pl-4 text-truncate align-text-center'>
									{product.Price}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProductList;
