import React from 'react';

const AccountModal = (props) => {
    const account = props.account;

    return (
        <div className='account-modal'>
            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='wrapper'>
                        <form action=''>
                            <div id='wizard'>
                                <section>
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
                                                    type='text'
                                                    placeholder={account.Name}
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className='form-holder'>
                                                <input
                                                    type='text'
                                                    placeholder={
                                                        account.PhoneNumber
                                                    }
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className='form-holder'>
                                                <input
                                                    type='text'
                                                    placeholder={account.Email}
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className='form-holder'>
                                                <input
                                                    type='text'
                                                    placeholder={account.DoB}
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='form-holder'>
                                        <input
                                            type='text'
                                            placeholder={account.Address}
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='form-holder'>
                                        <input
                                            type='password'
                                            placeholder={account.Password}
                                            className='form-control'
                                        />
                                    </div>
                                </section>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountModal;
