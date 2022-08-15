import React, { useEffect, useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import jwt from 'jwt-decode';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import AuthContext from '../../context/authContext';
import { selectCurrentUser } from '../../store/slices/authSlice';
import Header from '../../navigations/Header/header';
import Footer from '../../navigations/Footer/footer';
import AccountManager from '../../components/AccountManager/accountManager';
import CategoryList from '../../components/CategoryList/categoryList';

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
        }
    }, [setAdmin, authToken, currUser, userName, navigate]);

    return (
        <div className='admin'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Quản lý &#9702; Brogemway</title>
            </Helmet>

            <Header />

            {admin ? (
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
                                    <AccountManager {...admin} />
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
