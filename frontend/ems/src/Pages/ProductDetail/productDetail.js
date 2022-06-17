import { AiFillHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import Navbar from '../../Components/NavBar/navbar';
import CarouselSlider from '../../Components/CarouselSlider/carouselSlider';

const products = require('../../Database/Products.json');

const ProductDetail = () => {
	//const { products } = props;
	const param = useParams();
	let index = products.findIndex((product) => product.ProID === param.id);

	return (
		<>
			<div class='mb-5'>
				<Navbar />
			</div>

			<div className='product-detail'>
				<div class='container mt-5 mb-5'>
					<div class='card'>
						<div class='row g-0'>
							<div class='col-md-6 border-end'>
								<div class='d-flex flex-column justify-content-center'>
									<div class='main_image'>
										<img
											src={require(`../../Assets/Images/products/${products[index].ProID}/1.png`)}
											id='main_product_image'
											width='500px'
											alt=''
										/>
									</div>
									<div class='thumbnail_images'>
										<CarouselSlider
											index={products[index].ProID}
										/>
									</div>
								</div>
							</div>

							<div class='col-md-6'>
								<div class='p-3 right-side'>
									<div class='d-flex justify-content-between align-items-center'>
										<h3>{products[index].ProName}</h3>
										<span class='heart'>
											<AiFillHeart />
										</span>
									</div>
									<div class='mt-2 pr-3 content'>
										<p>{products[index].Description}</p>
									</div>
									<h3>{products[index].Price}</h3>

									<div class='mt-5'>
										<span class='fw-bold'>Color</span>
										<div class='colors'>
											<ul id='marker'>
												<li id='marker-1'></li>
												<li id='marker-2'></li>
												<li id='marker-3'></li>
												<li id='marker-4'></li>
												<li id='marker-5'></li>
											</ul>
										</div>
									</div>
									<div class='buttons d-flex flex-row mt-5 gap-3'>
										<button class='btn btn-outline-dark'>
											Mua ngay
										</button>
										<button class='btn btn-dark'>
											Thêm vào giỏ
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='col p-5'>
				<section class='section'>
					<div class='heading pb-5'>Bạn có thể thích</div>
					<CarouselSlider index={products[index].ProID} />
				</section>
			</div>
		</>
	);
};

export default ProductDetail;
