import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AiOutlineHome } from 'react-icons/ai';

// import './NotFoundScreen.scss';

const NotFoundScreen = () => {
	return (
		<div className='notfound-screen'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>404 - Không tìm thấy trang &#9702; Brogemway</title>
			</Helmet>

			<div className='card text-center'>
				<img
					src={require('../../assets/images/notfound.gif')}
					alt='...'
					className='card-img-center'
				/>
				<div className='card-body'>
					<h4 className='card-text'>
						<i>Sorry, requested page not found</i>
					</h4>

					<Link
						href='/'
						className='card-footer-item'
						style={{ fontSize: '2vw', color: 'red' }}
					>
						<AiOutlineHome /> Trang chủ
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFoundScreen;
