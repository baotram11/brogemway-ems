import React from 'react';
import OurServices from '../OurServices/ourServices';
import OurSocial from '../OurSocial/ourSocial';

const OurStory = () => {
	return (
		<div className='about-area section-padding40'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-10'>
						<div className='section-tittle mb-60 text-center pt-10'>
							<h2>Về chúng tôi</h2>
							<p className='pera'>
								Ra đời năm 2022, Brogemway mang đến cho bạn những sản phẩm mới và thịnh hành
								nhất hiện tại. Nó bao gồm những thể loại khác nhau, từ kĩ thuật số, điện tử,
								điện thoại, máy tính bảng, laptop,... đến các mặt hàng thời trang như quần áo
								nam/nữ, giày tây, giày thể thao, và các phụ kiện như túi xách,... tất cả đều
								có ở Brogemway.
							</p>
						</div>
					</div>
					<div className='col-lg-12'>
						<div className='about-img pb-bottom'>
							<img
								className='w-100'
								src={require('../../assets/images/heros/hero-home3.png')}
								alt='...'
							/>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-lg-10'>
							<div className='section-tittle mb-60 text-center pt-10'>
								<h2>Bắt đầu</h2>
								<p className='pera'>
									Ra đời năm 2022, Brogemway mang đến cho bạn những sản phẩm mới và thịnh
									hành nhất hiện tại. Nó bao gồm những thể loại khác nhau, từ kĩ thuật số,
									điện tử, điện thoại, máy tính bảng, laptop,... đến các mặt hàng thời trang
									như quần áo nam/nữ, giày tây, giày thể thao, và các phụ kiện như túi
									xách,... tất cả đều có ở Brogemway.
								</p>
							</div>
						</div>
						<div className='col-lg-12'>
							<div className='about-img pb-bottom'>
								<img
									className='w-100'
									src={require('../../assets/images/heros/hero-navslider.png')}
									alt='...'
								/>
							</div>
						</div>
					</div>
				</div>
				<OurSocial />

				<OurServices />
			</div>
		</div>
	);
};

export default OurStory;
