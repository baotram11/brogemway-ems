import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Header/Header.NavBar';

const products = require('../../Database/Products.json');

const ProductDetail = () => {
    //const { products } = props;
    const { id } = useParams();

    return (
        <div className='product-detail'>
            <Navbar />

            <div class='container mt-5 mb-5'>
                <div class='card pt-5'>
                    <div class='row g-0'>
                        <div class='col-md-6 border-end'>
                            <div class='d-flex flex-column justify-content-center'>
                                <div class='main_image'>
                                    <image
                                        src={require(`../../Assets/Images/products/${products[id - 1].ProID}/1.png`)}
                                        id='main_product_image'
                                        width='350'
                                    />
                                </div>
                                <div class='thumbnail_images'>
                                    <ul id='thumbnail'>
                                        <li>
                                            <image
                                                onclick='changeImage(this)'
                                                src={require(`../../Assets/Images/products/${products[id].ProID}/2.png`)}
                                                width='70'
                                            />
                                        </li>
                                        <li>
                                            <image
                                                onclick='changeImage(this)'
                                                src={require(`../../Assets/Images/products/${products[id].ProID}/3.png`)}
                                                width='70'
                                            />
                                        </li>
                                        <li>
                                            <image
                                                onclick='changeImage(this)'
                                                src={require(`../../Assets/Images/products/${products[id].ProID}/4.png`)}
                                                width='70'
                                            />
                                        </li>
                                        <li>
                                            <image
                                                onclick='changeImage(this)'
                                                src={require(`../../Assets/Images/products/${products[id].ProID}/5.png`)}
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
                                    <h3>{products[id].ProName}</h3>
                                    <span class='heart'>
                                        <i class='bx bx-heart'></i>
                                    </span>
                                </div>
                                <div class='mt-2 pr-3 content'>
                                    <p>{products[id].Description}</p>
                                </div>
                                <h3>{products[id].Price}</h3>
                                <div class='ratings d-flex flex-row align-items-center'>
                                    <div class='d-flex flex-row'>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bx-star'></i>
                                    </div>
                                    <span>441 reviews</span>
                                </div>

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
    );
};

export default ProductDetail;
