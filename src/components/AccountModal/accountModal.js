import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

const AccountModal = (props) => {
    const account = props.account;

    const show = props.show;
    const handleClose = props.handleClose;
    useEffect(() => {
        console.log(account);
    });
    return (
        <div className='account-modal'>
            <Modal
                className='modal'
                show={show}
                onHide={handleClose}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span>Mã tài khoản: </span>
                        <span style={{ fontWeight: 'bold', color: '#167146' }}>
                            {account._id}
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center h-100'>
                            {/* <div className='col col-lg-6 mb-4 mb-lg-0'> */}
                            <div
                                className='card'
                                style={{
                                    borderRadius: '.5rem',
                                    padding: '0px',
                                }}
                            >
                                <div className='row g-0'>
                                    <div
                                        className='col-md-4 gradient-custom text-center text-white'
                                        style={{
                                            borderTopLeftRadius: '.5rem',
                                            borderBottomLeftRadius: '.5rem',
                                        }}
                                    >
                                        <img
                                            src={require('../../assets/images/avatars/4.png')}
                                            alt='Avatar'
                                            className='img-fluid mt-5 mb-4'
                                            style={{ width: '100px' }}
                                        />
                                        <h5>{account.Name}</h5>
                                        {account.Level === 'bidder' ? (
                                            <p>Khách hàng</p>
                                        ) : (
                                            <p>Quản lý</p>
                                        )}
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body p-4'>
                                            <h6>Information</h6>
                                            <hr className='mt-0 mb-4' />
                                            <div className='row pt-1'>
                                                <div className='col-6 mb-3'>
                                                    <h6>Email</h6>
                                                    <p className='text-muted'>
                                                        info@example.com
                                                    </p>
                                                </div>
                                                <div className='col-6 mb-3'>
                                                    <h6>Phone</h6>
                                                    <p className='text-muted'>
                                                        123 456 789
                                                    </p>
                                                </div>
                                            </div>
                                            <h6>Projects</h6>
                                            <hr className='mt-0 mb-4' />
                                            <div className='row pt-1'>
                                                <div className='col-6 mb-3'>
                                                    <h6>Recent</h6>
                                                    <p className='text-muted'>
                                                        Lorem ipsum
                                                    </p>
                                                </div>
                                                <div className='col-6 mb-3'>
                                                    <h6>Most Viewed</h6>
                                                    <p className='text-muted'>
                                                        Dolor sit amet
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-start'>
                                                <a href='#!'>
                                                    <i className='fab fa-facebook-f fa-lg me-3'></i>
                                                </a>
                                                <a href='#!'>
                                                    <i className='fab fa-twitter fa-lg me-3'></i>
                                                </a>
                                                <a href='#!'>
                                                    <i className='fab fa-instagram fa-lg'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    {/* <div className='wrapper'>
                        <form action=''>
                            <div className='wizard'>
                                <div className='row form-header'>
                                    <div className='col'>
                                        <div className='avartar'>
                                            <img
                                                src={require(`../../assets/images/avatars/1.png`)}
                                                alt='https://bootdey.com/img/Content/avatar/avatar1.png'
                                            />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <div className='form-holder active'>
                                                <input
                                                    disabled={true}
                                                    type='text'
                                                    placeholder={account.Name}
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className='form-holder'>
                                                <input
                                                    disabled={true}
                                                    type='text'
                                                    placeholder={
                                                        account.PhoneNumber
                                                    }
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className='form-holder'>
                                                <input
                                                    disabled={true}
                                                    type='text'
                                                    placeholder={account.Email}
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className='form-holder'>
                                                <input
                                                    disabled={true}
                                                    type='text'
                                                    placeholder={account.DoB}
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='form-holder'>
                                    <input
                                        disabled={true}
                                        type='text'
                                        placeholder={account.Address}
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-holder'>
                                    <input
                                        disabled={true}
                                        type='password'
                                        placeholder={account.Password}
                                        className='form-control'
                                    />
                                </div>
                            </div>
                        </form>
                    </div> */}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AccountModal;
