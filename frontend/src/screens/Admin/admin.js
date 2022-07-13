import { Link } from 'react-router-dom';
import React from 'react';
import AccountManager from '../../components/AccountManager/accountManager';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CategoryList from '../../components/CategoryList/categoryList';

const Admin = () => {
    return (
        <div className='admin'>
            {/* <div className='row pt-5'>
                <div className='col-md-auto pr-5'>
                    <div className='list-group text-center'>
                        <Link to='#' className='list-group-item'>
                            <p>Quản lý sản phẩm</p>
                        </Link>
                        <Link to='#' className='list-group-item'>
                            <p>Quản lý danh mục</p>
                        </Link>
                        <Link to='#' className='list-group-item'>
                            <p>Quản lý người dùng</p>
                        </Link>
                    </div>
                </div>
                <div className='col' id='product'>
                    <AccountManager />
                </div>
            </div> */}
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
                            <Tab.Pane eventKey='tab2'><CategoryList /></Tab.Pane>
                            <Tab.Pane eventKey='tab3'><AccountManager /></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Admin;
