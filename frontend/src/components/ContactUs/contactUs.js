import React from 'react';

const ContactUs = () => {
    return (
        <div className='contact-us container-fluid justify-content-center'>
            <div className='row py-5'>
                <div className='col'>
                    <div className='card border-0'>
                        <div className='card-body text-center '>
                            <h2>
                                <b>Nhận thông tin mới !</b>
                            </h2>
                            <p className='pl-0 ml-0 mb-5'>
                                Hãy là người đầu tiên nhận tin tức và thông tin sản phẩm mới của chúng tôi.
                            </p>
                            <div className='row text-center justify-content-center'>
                                <div className='col-auto'>
                                    <div className='input-group-lg input-group mb-3 '>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Nhập địa chỉ email'
                                            aria-label="Recipient's username"
                                            aria-describedby='button-addon2'
                                        />
                                        <div className='input-group-append'>
                                            <button
                                                className='btn btn-success'
                                                type='button'
                                                id='button-addon2'
                                            >
                                                <b>Đăng ký</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
