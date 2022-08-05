import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import AccountManager from '../../components/AccountManager/accountManager';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CategoryList from '../../components/CategoryList/categoryList';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/slices/authSlice';

const Admin = () => {
	const navigate = useNavigate();
	const currUser = useSelector(selectCurrentUser);

	useEffect(() => {
		console.log(currUser);
		if (!currUser) {
			return navigate('/403');
		}
	}, [currUser, navigate]);

	return (
		<div className='admin'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Quản lý &#9702; Brogemway</title>
			</Helmet>

			<Header />

			{currUser ? (
				<Tab.Container id='left-tabs-example' defaultActiveKey='tab1'>
					<Row>
						<Col sm={3}>
							<Nav variant='pills' className='flex-column'>
								<Nav.Item>
									<Nav.Link eventKey='tab1' href='#'>
										Quản lý sản phẩm
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='tab2' href='#'>
										Quản lý danh mục
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='tab3' href='#'>
										Quản lý người dùng
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey='tab1'>first</Tab.Pane>
								<Tab.Pane eventKey='tab2'>
									<CategoryList />
								</Tab.Pane>
								<Tab.Pane eventKey='tab3'>
									<AccountManager />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			) : null}

			<Footer />
		</div>
	);
};

export default Admin;
