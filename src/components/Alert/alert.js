import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Alert = (props) => {
    const navigate = useNavigate();
    const { type, show, message, handleClose, redirect } = props;
    const handleBtn = () => {
        handleClose();
        return navigate(redirect);
    };
    return (
        <Modal
            className='alert-modal'
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            {type === 'error' ? (
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

                    <button onClick={handleClose}>Đã hiểu</button>
                </div>
            ) : (
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

                    <button onClick={handleBtn}>OK</button>
                </div>
            )}
        </Modal>
    );
};

export default Alert;
