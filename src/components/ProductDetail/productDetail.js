import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../store/slices/productSlice';
import { CurrencyConverter } from '../../utils/CurrencyConverter';
import {
    fetchCategories,
    selectAllCategories,
    selectStatusCats,
} from '../../store/slices/categorySlice';
import ImageSlider from '../ImageSlider/imageSlider';
import NavSlider from '../NavSlider/navSlider';

const ProductDetail = (props) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [showMessage, setShowMessage] = useState(false);
    const [product] = useSelector(selectProduct);

    const categories = useSelector(selectAllCategories);
    const statusCats = useSelector(selectStatusCats);

    const handleValue = (e) => {
        let rawValue = e.target.value;
        if (rawValue < 1 || rawValue > 10) {
            setCount(rawValue);
            setShowMessage(true);
        } else {
            setCount(rawValue);
            setShowMessage(false);
        }
    };
    const breadcrumb = {
        title: product.ProName,
        titlePath: '#',
        parentTitle: 'Sản phẩm',
        parentTitlePath: 'products',
    };
    useEffect(() => {
        console.log(count);
        if (count < 1 || count > 10) {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    }, [count]);
    useEffect(() => {
        if (statusCats !== 'succeeded') {
            dispatch(fetchCategories());
        }
    });
    return (
        <div>
            <NavSlider {...breadcrumb} />

            <div className='py-5 product_image_area section-padding40'>
                <div className='container'>
                    <div className='row s_product_inner'>
                        <div className='col-lg-5'>
                            <div className='product_slider_img'>
                                <div
                                    className='lslide active'
                                    style={{
                                        width: '470px',
                                        marginRight: '0px',
                                    }}
                                    data-thumb={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                >
                                    <img
                                        className='w-100'
                                        src={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                        alt='...'
                                    />
                                </div>
                                <ImageSlider {...{ index: product.ProID }} />
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='s_product_text'>
                                <h3>{product.ProName}</h3>
                                <h2>{CurrencyConverter(product.Price)}</h2>
                                <ul className='list'>
                                    {categories[product.CatID - 1] ? (
                                        <li>
                                            <Link
                                                className='link active'
                                                to={`/category/${product.CatID}`}

                                            >
                                                <span>Danh mục:</span>{' '}
                                                {
                                                    categories[
                                                        product.CatID - 1
                                                    ].CatName
                                                }
                                            </Link>
                                        </li>
                                    ) : null}
                                    <li>
                                        <Link className='link' to='#'>
                                            <span>Tình trạng:</span> Còn hàng
                                        </Link>
                                    </li>
                                </ul>
                                {/* <p>{product.Description}</p> */}
                                <p>
                                    Gi&agrave;y thể thao đế thấp Tread Slick
                                    m&agrave;u trắng / vải cotton nhiều
                                    m&agrave;u của Alexander McQueen c&oacute;
                                    phần cổ tương phản, mũi gi&agrave;y
                                    tr&ograve;n, đ&iacute;nh ren ph&iacute;a
                                    trước, kh&oacute;a k&eacute;o ở g&oacute;t
                                    v&agrave; đế cao su chunky. <br />
                                    C&oacute; nguồn gốc từ Savile Row, Alexander
                                    McQueen kết hợp di sản may đo của Anh với
                                    tinh thần nổi loạn r&otilde; rệt. Dưới sự
                                    quản l&yacute; của Sarah Burton - người
                                    đ&atilde; tạo ra tầm nh&igrave;n l&atilde;ng
                                    mạn của ri&ecirc;ng m&igrave;nh trong khi
                                    vẫn duy tr&igrave; một g&oacute;c cạnh
                                    khi&ecirc;u kh&iacute;ch - ng&ocirc;i
                                    nh&agrave; tiếp tục g&acirc;y ấn tượng với
                                    bộ trang phục kh&ocirc;ng lỗi, những bản in
                                    r&ugrave;ng rợn v&agrave; d&ograve;ng
                                    gi&agrave;y thể thao tuy&ecirc;n bố đặc
                                    trưng.
                                </p>
                                <p>Đặc điểm:</p>{' '}
                                <ul>
                                    {' '}
                                    <li>G&oacute;t: 5,5 cm;</li>{' '}
                                    <li>Nền: 4 cm;</li>{' '}
                                    <li>
                                        B&ecirc;n ngo&agrave;i: 100% cotton,
                                        L&oacute;t: 100% da, Đế: 100% cao su
                                    </li>{' '}
                                    <li>Sản xuất tại &Yacute;</li>{' '}
                                </ul>
                                <div className='card_area'>
                                    <div className='product_count d-inline-block'>
                                        <span
                                            className='inumber-decrement px-2'
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i
                                                className='fa-solid fa-minus'
                                                onClick={() => {
                                                    setCount(count - 1);
                                                }}
                                            ></i>
                                        </span>
                                        <input
                                            className='input-number'
                                            type='number'
                                            value={count}
                                            onChange={handleValue}
                                            min={0}
                                            max={10}
                                        />
                                        <span
                                            className='number-increment px-2'
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i
                                                className='fa-solid fa-plus'
                                                onClick={() => {
                                                    setCount(
                                                        parseInt(count) + 1
                                                    );
                                                }}
                                            ></i>
                                        </span>
                                    </div>
                                    {showMessage ? (
                                        <span
                                            style={{
                                                color: '#ff0000',
                                                fontWeight: '600',
                                                paddingLeft: '20px',
                                            }}
                                        >
                                            *Bạn được mua từ 1 đến tối đa 10 sản
                                            phẩm
                                        </span>
                                    ) : null}
                                    <div className='add_to_cart'>
                                        <span>
                                            <Link
                                                to='#'
                                                className='link border-btn'
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Thêm vào giỏ hàng
                                            </Link>
                                        </span>
                                        <span>
                                            <Link to='#' className='like_us'>
                                                <i
                                                    className='fa fa-heart-o'
                                                    aria-hidden='true'
                                                ></i>
                                            </Link>
                                        </span>
                                    </div>
                                    <div className='social_icon'>
                                        <Link className='link tw' to='#'>
                                            <i className='fa-brands fa-youtube'></i>
                                        </Link>
                                        <Link className='link fb' to='#'>
                                            <i className='fa-brands fa-facebook-f'></i>
                                        </Link>
                                        <Link className='link li' to='#'>
                                            <i className='fa-brands fa-instagram'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className='product_description_area'>
                <div className='container'>
                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                        <li className='nav-item'>
                            <Link
                                className='nav-link'
                                id='home-tab'
                                data-toggle='tab'
                                to='#'
                                role='tab'
                                aria-controls='home'
                                aria-selected='true'
								
                            >
                                Mô tả
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link'
                                id='profile-tab'
                                data-toggle='tab'
                                to='#profile'
                                role='tab'
                                aria-controls='profile'
                                aria-selected='false'
                            >
                                Specification
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link'
                                id='contact-tab'
                                data-toggle='tab'
                                to='#contact'
                                role='tab'
                                aria-controls='contact'
                                aria-selected='false'
                            >
                                Comments
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link active'
                                id='review-tab'
                                data-toggle='tab'
                                to='#review'
                                role='tab'
                                aria-controls='review'
                                aria-selected='false'
                            >
                                Reviews
                            </Link>
                        </li>
                    </ul>
                    <div className='tab-content' id='myTabContent'>
                        <div
                            className='tab-pane fade'
                            id='home'
                            role='tabpanel'
                            aria-labelledby='home-tab'
                        >
                            <p>
                                Beryl Cook is one of Britain’s most talented and
                                amusing artists .Beryl’s pictures feature women
                                of all shapes and sizes enjoying themselves
                                .Born between the two world wars, Beryl Cook
                                eventually left Kendrick School in Reading at
                                the age of 15, where she went to secretarial
                                school and then into an insurance office. After
                                moving to London and then Hampton, she
                                eventually married her next door neighbour from
                                Reading, John Cook. He was an officer in the
                                Merchant Navy and after he left the sea in 1956,
                                they bought a pub for a year before John took a
                                job in Southern Rhodesia with a motor company.
                                Beryl bought their young son a box of
                                watercolours, and when showing him how to use
                                it, she decided that she herself quite enjoyed
                                painting. John subsequently bought her a child’s
                                painting set for her birthday and it was with
                                this that she produced her first significant
                                work, a half-length portrait of a dark-skinned
                                lady with a vacant expression and large drooping
                                breasts. It was aptly named ‘Hangover’ by
                                Beryl’s husband and
                            </p>
                            <p>
                                It is often frustrating to attempt to plan meals
                                that are designed for one. Despite this fact, we
                                are seeing more and more recipe books and
                                Internet websites that are dedicated to the act
                                of cooking for one. Divorce and the death of
                                spouses or grown children leaving for college
                                are all reasons that someone accustomed to
                                cooking for more than one would suddenly need to
                                learn how to adjust all the cooking practices
                                utilized before into a streamlined plan of
                                cooking that is more efficient for one person
                                creating less
                            </p>
                        </div>
                        <div
                            className='tab-pane fade'
                            id='profile'
                            role='tabpanel'
                            aria-labelledby='profile-tab'
                        >
                            <div className='table-responsive'>
                                <table className='table'>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5>Width</h5>
                                            </td>
                                            <td>
                                                <h5>128mm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Height</h5>
                                            </td>
                                            <td>
                                                <h5>508mm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Depth</h5>
                                            </td>
                                            <td>
                                                <h5>85mm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Weight</h5>
                                            </td>
                                            <td>
                                                <h5>52gm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Quality checking</h5>
                                            </td>
                                            <td>
                                                <h5>yes</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Freshness Duration</h5>
                                            </td>
                                            <td>
                                                <h5>03days</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>When packeting</h5>
                                            </td>
                                            <td>
                                                <h5>Without touch of hand</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Each Box contains</h5>
                                            </td>
                                            <td>
                                                <h5>60pcs</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div
                            className='tab-pane fade'
                            id='contact'
                            role='tabpanel'
                            aria-labelledby='contact-tab'
                        >
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='comment_list'>
                                        <div className='review_item'>
                                            <div className='media'>
                                                <div className='d-flex'>
                                                    <img
                                                        src='assets/img/gallery/xreview-1.png.pagespeed.ic.jdf7CtxAfy.webp'
                                                        alt=''
                                                        data-pagespeed-url-hash='833170023'
                                                        onLoad='pagespeed.CriticalImages.checkImageForCriticality(this);'
                                                    />
                                                </div>
                                                <div className='media-body'>
                                                    <h4>Blake Ruiz</h4>
                                                    <h5>
                                                        12th Feb, 2017 at 05:56
                                                        pm
                                                    </h5>
                                                    <Link
                                                        className='reply_btn'
                                                        to='#'
                                                    >
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo
                                            </p>
                                        </div>
                                        <div className='review_item reply'>
                                            <div className='media'>
                                                <div className='d-flex'>
                                                    <img
                                                        src='assets/img/gallery/xreview-2.png.pagespeed.ic.KkOyylDWr0.webp'
                                                        alt=''
                                                        data-pagespeed-url-hash='1127669944'
                                                        onLoad='pagespeed.CriticalImages.checkImageForCriticality(this);'
                                                    />
                                                </div>
                                                <div className='media-body'>
                                                    <h4>Blake Ruiz</h4>
                                                    <h5>
                                                        12th Feb, 2017 at 05:56
                                                        pm
                                                    </h5>
                                                    <Link
                                                        className='reply_btn'
                                                        to='#'
                                                    >
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo
                                            </p>
                                        </div>
                                        <div className='review_item'>
                                            <div className='media'>
                                                <div className='d-flex'>
                                                    <img
                                                        src='assets/img/gallery/xreview-3.png.pagespeed.ic.es8t66m2Jy.webp'
                                                        alt=''
                                                        data-pagespeed-url-hash='1422169865'
                                                        onLoad='pagespeed.CriticalImages.checkImageForCriticality(this);'
                                                    />
                                                </div>
                                                <div className='media-body'>
                                                    <h4>Blake Ruiz</h4>
                                                    <h5>
                                                        12th Feb, 2017 at 05:56
                                                        pm
                                                    </h5>
                                                    <Link
                                                        className='reply_btn'
                                                        to='#'
                                                    >
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='review_box'>
                                        <h4>Post a comment</h4>
                                        <form
                                            className='row contact_form'
                                            action='contact_process.php'
                                            method='post'
                                            id='contactForm'
                                            noValidate='novalidate'
                                        >
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='name'
                                                        name='name'
                                                        placeholder='Your Full name'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <input
                                                        type='email'
                                                        className='form-control'
                                                        id='email'
                                                        name='email'
                                                        placeholder='Email Address'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='number'
                                                        name='number'
                                                        placeholder='Phone Number'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <textarea
                                                        className='form-control'
                                                        name='message'
                                                        id='message'
                                                        rows='1'
                                                        placeholder='Message'
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className='col-md-12 text-right'>
                                                <button
                                                    type='submit'
                                                    value='submit'
                                                    className='btn'
                                                >
                                                    Submit Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className='tab-pane fade show active'
                            id='review'
                            role='tabpanel'
                            aria-labelledby='review-tab'
                        >
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='row total_rate'>
                                        <div className='col-6'>
                                            <div className='box_total'>
                                                <h5>Overall</h5>
                                                <h4>4.0</h4>
                                                <h6>(03 Reviews)</h6>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='rating_list'>
                                                <h3>Based on 3 Reviews</h3>
                                                <ul className='list'>
                                                    <li>
                                                        <Link
                                                            className='link'
                                                            to='#'
                                                        >
                                                            5 Star
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>{' '}
                                                            01
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className='link'
                                                            to='#'
                                                        >
                                                            4 Star
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>{' '}
                                                            01
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className='link'
                                                            to='#'
                                                        >
                                                            3 Star
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>{' '}
                                                            01
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className='link'
                                                            to='#'
                                                        >
                                                            2 Star
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>{' '}
                                                            01
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className='link'
                                                            to='#'
                                                        >
                                                            1 Star
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>{' '}
                                                            01
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='review_list'>
                                        <div className='review_item'>
                                            <div className='media'>
                                                <div className='d-flex'>
                                                    <img
                                                        src='assets/img/gallery/xreview-1.png.pagespeed.ic.jdf7CtxAfy.webp'
                                                        alt=''
                                                        data-pagespeed-url-hash='833170023'
                                                        onLoad='pagespeed.CriticalImages.checkImageForCriticality(this);'
                                                    />
                                                </div>
                                                <div className='media-body'>
                                                    <h4>Blake Ruiz</h4>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo
                                            </p>
                                        </div>
                                        <div className='review_item'>
                                            <div className='media'>
                                                <div className='d-flex'>
                                                    <img
                                                        src='assets/img/gallery/xreview-2.png.pagespeed.ic.KkOyylDWr0.webp'
                                                        alt=''
                                                        data-pagespeed-url-hash='1127669944'
                                                        onLoad='pagespeed.CriticalImages.checkImageForCriticality(this);'
                                                    />
                                                </div>
                                                <div className='media-body'>
                                                    <h4>Blake Ruiz</h4>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo
                                            </p>
                                        </div>
                                        <div className='review_item'>
                                            <div className='media'>
                                                <div className='d-flex'>
                                                    <img
                                                        src='assets/img/gallery/xreview-3.png.pagespeed.ic.es8t66m2Jy.webp'
                                                        alt=''
                                                        data-pagespeed-url-hash='1422169865'
                                                        onLoad='pagespeed.CriticalImages.checkImageForCriticality(this);'
                                                    />
                                                </div>
                                                <div className='media-body'>
                                                    <h4>Blake Ruiz</h4>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='review_box'>
                                        <h4>Add a Review</h4>
                                        <p>Your Rating:</p>
                                        <ul className='list'>
                                            <li>
                                                <Link className='link' to='#'>
                                                    <i className='fa fa-star'></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='link' to='#'>
                                                    <i className='fa fa-star'></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='link' to='#'>
                                                    <i className='fa fa-star'></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='link' to='#'>
                                                    <i className='fa fa-star'></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='link' to='#'>
                                                    <i className='fa fa-star'></i>
                                                </Link>
                                            </li>
                                        </ul>
                                        <p>Outstanding</p>
                                        <form
                                            className='row contact_form'
                                            action='contact_process.php'
                                            method='post'
                                            noValidate=''
                                        >
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        name='name'
                                                        placeholder='Your Full name'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <input
                                                        type='email'
                                                        className='form-control'
                                                        name='email'
                                                        placeholder='Email Address'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        name='number'
                                                        placeholder='Phone Number'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <textarea
                                                        className='form-control'
                                                        name='message'
                                                        rows='1'
                                                        placeholder='Review'
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className='col-md-12 text-right'>
                                                <button
                                                    type='submit'
                                                    value='submit'
                                                    className='btn'
                                                >
                                                    Submit Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default ProductDetail;
