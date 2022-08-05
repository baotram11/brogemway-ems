import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from '../../components/NotFound/notFound';

const Page404 = () => {
	return (
		<div className='page404'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>404-Không tìm thấy trang &#9702; Brogemway</title>
			</Helmet>
			<NotFound />
		</div>
	);
};

export default Page404;
