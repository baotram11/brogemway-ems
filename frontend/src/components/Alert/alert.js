import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Alert = (props) => {
    const { type, show, message, handleClose } = props;
    return (
        <div className='alert'>
            {type === 'error' ? (
                <Modal
                    className='modal'
                    show={show}
                    onHide={handleClose}
                    size='md'
                    aria-labelledby='contained-modal-title-vcenter'
                    centered
                >
                    <div className='wrapper red'>
                        <div className='header__wrapper'>
                            <div className='header'>
                                <div className='sign'>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <h1>Lỗi!</h1>
                        <p>{message}</p>

                        <button>Đã hiểu</button>
                    </div>
                </Modal>
            ) : (
                <Modal
                    className='modal'
                    show={show}
                    onHide={handleClose}
                    size='md'
                    aria-labelledby='contained-modal-title-vcenter'
                    centered
                >
                    <div className='wrapper green'>
                        <div className='header__wrapper'>
                            <div className='header'>
                                <div className='sign'>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <h1>Thành công!</h1>
                        <p>{message}</p>

                        <button>OK</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Alert;
