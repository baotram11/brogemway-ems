import React from 'react';
import { Helmet } from 'react-helmet';
import AccessDenied from '../../components/AccessDenied/accessDenied';

const Page403 = () => {
	return (
		<div className='page403'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>403-Từ chối truy cập &#9702; Brogemway</title>
			</Helmet>
			<AccessDenied />
		</div>
	);
};

export default Page403;
