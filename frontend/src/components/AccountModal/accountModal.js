import React from 'react';
import Modal from 'react-bootstrap/Modal';

const AccountModal = (props) => {
    const account = props.account;

    const show = props.show;
    const handleClose = props.handleClose;

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
                            {account.UserID}
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <div className='wrapper'>
                        <form action=''>
                            <div className='wizard'>
                                <div className='form-header'>
                                    <div className='avartar'>
                                        <img
                                            src={require(`../../assets/images/avatars/${account.UserID}.png`)}
                                            alt='https://bootdey.com/img/Content/avatar/avatar1.png'
                                        />

                                        <div className='avartar-picker'>
                                            <label htmlFor='file-1'>
                                                <i className='fa fa-camera'></i>
                                                <span>Chọn ảnh</span>
                                            </label>
                                        </div>
                                    </div>
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
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AccountModal;
