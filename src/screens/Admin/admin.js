import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import jwt from 'jwt-decode';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import AuthContext from '../../contexts/authContext';
import { selectCurrentUser } from '../../store/slices/authSlice';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import ManagedUser from '../../components/ManagedUser/managedUser';
import { ListGroup } from 'react-bootstrap';

import ManagedCategory from '../../components/ManagedCategory/managedCategory';
import CategoryContextProvider from '../../contexts/categoryContext';

const Admin = () => {
    const navigate = useNavigate();
    const currUser = useSelector(selectCurrentUser);
    const { authToken, userName } = useContext(AuthContext);
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        if (authToken) {
            const rawUser = jwt(authToken);
            setAdmin({
                accessToken: authToken,
                account: {
                    Name: userName,
                    ID: rawUser.id,
                    Level: rawUser.role,
                    accessToken: authToken,
                },
            });
        } else if (currUser) {
            setAdmin(currUser);
        } else {
            setAdmin(null);
            navigate('/403');
        }
    }, [setAdmin, authToken, currUser, userName, navigate]);

    return (
        <div className='admin-srceen'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Quản lý &#9702; Brogemway</title>
            </Helmet>

            <Header />

            {admin ? (
                <div className='admin-area py-5'>
                    <Tab.Container bsPrefix='list-group-tabs' defaultActiveKey='#managed-product' transition={false}>
                        <Row
                            style={{
                                marginLeft: '10%',
                                marginRight: '3%',
                                marginTop: '1%',
                                marginBottom: '10%',
                            }}
                        >
                            <Col sm={2}>
                                <ListGroup bsPrefix='list-group'>
                                    <ListGroup.Item bsPrefix='list-group-item' action href='#managed-product'>
                                        Quản lý sản phẩm
                                    </ListGroup.Item>
                                    <ListGroup.Item action href='#managed-category'>
                                        Quản lý danh mục
                                    </ListGroup.Item>
                                    <ListGroup.Item action href='#managed-user'>
                                        Quản lý người dùng
                                    </ListGroup.Item>
                                    <ListGroup.Item action href='#managed-order'>
                                        Quản lý đơn hàng
                                    </ListGroup.Item>
                                    <ListGroup.Item action href='#revenue-statistics'>
                                        Thống kê doanh thu
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <Tab.Content transition={false}>
                                    <Tab.Pane eventKey='#managed-product'></Tab.Pane>

                                    <Tab.Pane eventKey='#managed-category'>
                                        <CategoryContextProvider>
                                            <ManagedCategory />
                                        </CategoryContextProvider>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey='#managed-user'>
                                        <ManagedUser {...admin} />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey='#managed-order'>Tính năng đang được phát triển.</Tab.Pane>

                                    <Tab.Pane eventKey='#revenue-statistics'>Tính năng đang được phát triển.</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            ) : null}

            <Footer />
        </div>
    );
};

export default Admin;
