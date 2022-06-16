import { useParams } from 'react-router-dom';
import Navbar from '../../Components/NavBar/navbar';

const products = require('../../Database/Products.json');

const ProductDetail = () => {
	//const { products } = props;
	const param = useParams();
	let index = products.findIndex((product) => product.ProID === param.id);

	return (
		<>
			<Navbar />

			<div className='product-detail'>
				<div class='container mt-5 mb-5'>
					<div class='card pt-5'>
						<div class='row g-0'>
							<div class='col-md-6 border-end'>
								<div class='d-flex flex-column justify-content-center'>
									<div class='main_image'>
										<image
											src={require(`../../Assets/Images/products/${products[index].ProID}/1.png`)}
											id='main_product_image'
											width='350px'
										/>
									</div>
									<div class='thumbnail_images'>
										<ul id='thumbnail'>
											<li>
												<image
													onclick='changeImage(this)'
													src={require(`../../Assets/Images/products/${products[index].ProID}/2.png`)}
													width='70'
												/>
											</li>
											<li>
												<image
													onclick='changeImage(this)'
													src={require(`../../Assets/Images/products/${products[index].ProID}/3.png`)}
													width='70'
												/>
											</li>
											<li>
												<image
													onclick='changeImage(this)'
													src={require(`../../Assets/Images/products/${products[index].ProID}/4.png`)}
													width='70'
												/>
											</li>
											<li>
												<image
													onclick='changeImage(this)'
													src={require(`../../Assets/Images/products/${products[index].ProID}/5.png`)}
													width='70'
												/>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class='col-md-6'>
								<div class='p-3 right-side'>
									<div class='d-flex justify-content-between align-items-center'>
										<h3>{products[index].ProName}</h3>
										<span class='heart'>
											<i class='bx bx-heart'></i>
										</span>
									</div>
									<div class='mt-2 pr-3 content'>
										{products[index].Description}
									</div>
									<br />
									<h3>{products[index].Price}</h3>

									<div class='buttons d-flex flex-row mt-5 gap-3'>
										<button class='btn btn-outline-dark'>
											Mua ngay
										</button>
										<button class='btn btn-dark'>
											Thêm vào giỏ hàng
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
