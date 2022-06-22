import { AiFillHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import CarouselSlider from '../../components/CarouselSlider/CarouselSlider';

// import './ProductScreen.scss';

const products = require('../../database/Products.json');

const ProductScreen = () => {
	const param = useParams();
	let index = products.findIndex((product) => product.ProID === param.id);

	return (
		<div className='product-screen'>
			<div className='container mt-5 mb-5'>
				<div className='card'>
					<div className='row g-0'>
						<div className='col-md-6 border-end'>
							<div className='d-flex flex-column justify-content-center'>
								<div className='main_image'>
									<img
										src={require(`../../assets/images/products/${products[index].ProID}/1.png`)}
										id='main_product_image'
										width='500px'
										alt=''
									/>
								</div>
								<div className='thumbnail_images'>
									<CarouselSlider
										index={products[index].ProID}
									/>
								</div>
							</div>
						</div>

						<div className='col-md-6'>
							<div className='p-3 right-side'>
								<div className='d-flex justify-content-between align-items-center'>
									<h3>{products[index].ProName}</h3>
									<span className='heart'>
										<AiFillHeart />
									</span>
								</div>
								<div className='mt-2 pr-3 content'>
									<p>{products[index].Description}</p>
								</div>
								<h3>{products[index].Price}</h3>

								<div className='mt-5'>
									<span className='fw-bold'>Color</span>
									<div className='colors'>
										<ul id='marker'>
											<li id='marker-1'></li>
											<li id='marker-2'></li>
											<li id='marker-3'></li>
											<li id='marker-4'></li>
											<li id='marker-5'></li>
										</ul>
									</div>
								</div>
								<div className='buttons d-flex flex-row mt-5 gap-3'>
									<button className='btn btn-outline-dark'>
										Mua ngay
									</button>
									<button className='btn btn-dark'>
										Thêm vào giỏ
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='col p-5'>
				<section className='section'>
					<div className='heading pb-5'>Bạn có thể thích</div>
					<CarouselSlider index={products[index].ProID} />
				</section>
			</div>
		</div>
	);
};

export default ProductScreen;
