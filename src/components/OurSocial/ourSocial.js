import React from 'react';
import { Link } from 'react-router-dom';

const OurSocial = () => {
	return (
		<div className='instagram-area pb-padding'>
			<div className='container-fluid'>
				<div className='row align-items-center'>
					<div className='col-xl-3 col-lg-4 col-md-6'>
						<div className='instra-tittle mb-40'>
							<div className='section-tittle'>
								<img
									src='data:image/webp;base64,UklGRmACAABXRUJQVlA4TFQCAAAvPkAREIdgpm0bh/8zxCsNAkkb1z/zOYEgRPz0fwbFbSOpqX0zHGMA7vtYT7dWyYi5hXlkSM4rHAQCASFLkq0osA6jCBc4+9/uvQrS/YbPiP5PAP4j+lRKk0c+d3ksJYUPYh08cba8JwrPHXnNNZ7dw0LoPH2mV2Hy7RQRKesiIuMNmV+4QXvcyeNbF0t/YHhqNGfGmVGs4axMszscexus1jAEJ18GvUrUwx0So0IzbtWMhCPTJGcE4KaaaqqBI/0kyekB3IoBiNTljEKzAAhGAS4jniFWAwCjAcXATp+bkOxSwsNlXUqUAKLmhtj4dmTDTTWcqooPsuQbV0cEgNDI5qHLJ2lyY8HiQlvI3FsXkuFAXd4lPstdiswH3u+iEXf4aY3sYCaxmM4QmtXh5WVNd0KkWfA+TMV6ghgVq9mg+85TD6xX4/quGHmDN+Q7URM7m+J3U7Ut2QifUZct0Yh/Q/eWdIiovuU23GdV0e8YauCzbNQNmbp+h6kYl9ww4gHFmH6lUXcc4KbiDK+c0Iwn4DI4y4s4aDYcgWqQ804eLl6d9nBbhrrfuW4tz4ANAaLkHZxsmQHvLwN7gLKhOSyWd30JQRZGwvJTVVwDwj0eZkvYKGoAxfAbAPh4lRID9g4lQDLynk8d9Q14ox6XjQygK/rTuuEAFKMelqkFALzBfFSYRlaoBtNBoVMPmG4aLMekSTNaSBZHdickoX3j+bJI9lZK1AGAi9oDcFFfpQqfBW/vp4PFvUKep91YDXLUSNgY2zE9Y7PLt3zW2+XxsY/7A/4zAg=='
									alt='...'
								/>
								<h2>Kết nối instagram</h2>
								<p className='mb-35'>
									Theo dõi chúng tôi để biết thêm những sản phẩm. Hình ảnh, video mới nhất
									của sản phẩm sẽ được đăng tải ở instagram của chúng tôi. Hãy theo dõi{' '}
									<i>_brogemway_2324</i>
								</p>
								<Link to='#' className='border-btn link' style={{ textDecoration: 'none' }}>
									Kết nối
								</Link>
							</div>
						</div>
					</div>
					<div className='col-xl-9 col-lg-8'>
						<div className='row no-gutters'>
							<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
								<img
									className='w-100'
									src={require('../../assets/images/heros/hero-backup6.png')}
									alt='...'
									style={{ height: '400px', width: 'auto' }}
								/>
							</div>
							<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
								<img
									className='w-100'
									src={require('../../assets/images/heros/hero-navslider.png')}
									alt='...'
									style={{ height: '400px', width: 'auto' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurSocial;
