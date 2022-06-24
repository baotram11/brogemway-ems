import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='container-fluid justify-content-center'>
				<div className='row py-5'>
					<div className='col'>
						<div className='card border-0'>
							<div className='card-body text-center '>
								<h2>
									<b>Nhận thông tin mới !</b>
								</h2>
								<p className='pl-0 ml-0 mb-5'>
									Hãy là người đầu tiên nhận tin tức và thông
									tin sản phẩm mới của chúng tôi.
								</p>
								<div className='row text-center justify-content-center'>
									<div className='col-auto'>
										<div className='input-group-lg input-group mb-3 '>
											<input
												type='text'
												className='form-control'
												placeholder='Nhập địa chỉ email'
												aria-label="Recipient's username"
												aria-describedby='button-addon2'
											/>
											<div className='input-group-append'>
												<button
													className='btn btn-success'
													type='button'
													id='button-addon2'
												>
													<b>Đăng ký</b>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='astrodivider'>
					<div className='astrodividermask'></div>
					<span>
						<i>&#10038;</i>
					</span>
				</div>

				<footer>
					<div className='row justify-content-around mb-0 pb-0 '>
						<div className=' col-11'>
							<div className='row justify-content-center'>
								<div className='col-md-3 col-12 font-italic align-items-center mt-md-3 mt-4'>
									<h5>
										<span>
											<img
												src={require('../../assets/images/icons/logo.png')}
												alt='...'
												className='img-fluid mb-2'
											/>
										</span>
										<b className='text-brand'>BROGEMWAY</b>
									</h5>
									<p className='social mt-md-3 mt-2'>
										<span className='fa'>
											<FaFacebook color='#4267B2' />
										</span>
										<span className='fa'>
											<FaYoutube color='#FF0000' />
										</span>
										<span className='fa'>
											<FaLinkedinIn color='#0072b1' />
										</span>
										<span className='fa'>
											<FaTwitter color='#00acee' />
										</span>
									</p>
									<small className='copy-rights cursor-pointer'>
										&#9400; 2022 Brogemway
									</small>
									<br />
									<small>
										Copyright. All Rights Resered.
									</small>
								</div>
								<div className='col-md-3 col-12 my-sm-0 mt-5'>
									<ul className='list-unstyled'>
										<li className='mt-md-3 mt-4'>
											Giới thiệu
										</li>
										<li>Về chúng tôi</li>
										<li>Điều khoản sử dụng</li>
										<li>Sản phẩm</li>
										<li>Liên lạc</li>
									</ul>
								</div>
								<div className='col-md-3 col-12 my-sm-0 mt-5'>
									<ul className='list-unstyled'>
										<li className='mt-md-3 mt-4'>
											Danh mục
										</li>
										<li>Thiết bị số</li>
										<li>Giày</li>
										<li>Áo</li>
										<li>Quần</li>
										<li>Túi xách</li>
									</ul>
								</div>
								<div className='col-xl-auto col-md-3 col-12 my-sm-0 mt-5'>
									<ul className='list-unstyled'>
										<li className='mt-md-3 mt-4'>
											Cửa hàng
										</li>
										<li>
											<iframe
												src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.630773293551!2d106.67998301474876!3d10.762912992330719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1641658251544!5m2!1svi!2s'
												width='250'
												style={{ border: 1 }}
												allowfullscreen=''
												loading='lazy'
												title='Địa chỉ'
											></iframe>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
