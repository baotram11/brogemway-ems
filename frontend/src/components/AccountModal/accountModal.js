import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div class='wrapper'>
                        <form action=''>
                            <div id='wizard'>
                                <section>
                                    <div class='form-header'>
                                        <div class='avartar'>
                                            <Link to='#'>
                                                <img
                                                    src={require(`../../assets/images/avatars/${account.UserID}.png`)}
                                                    alt='https://bootdey.com/img/Content/avatar/avatar1.png'
                                                />
                                            </Link>
                                            <div class='avartar-picker'>
                                                <input
                                                    readonly
                                                    type='file'
                                                    name='file-1[]'
                                                    id='file-1'
                                                    class='inputfile'
                                                    data-multiple-caption='{count} files selected'
                                                    multiple
                                                />
                                                <label for='file-1'>
                                                    <i class='fa fa-camera'></i>
                                                    <span>Chọn ảnh</span>
                                                </label>
                                            </div>
                                            <div class='form-holder'>
                                        <input
                                            type='text'
                                            placeholder={account.IsActive}
                                            class='form-control'
                                        />
                                    </div>
                                        </div>
                                        <div class='form-group'>
                                            <div class='form-holder active'>
                                                <input
                                                    type='text'
                                                    placeholder={account.Name}
                                                    class='form-control'
                                                />
                                            </div>
                                            <div class='form-holder'>
                                                <input
                                                    type='text'
                                                    placeholder={account.PhoneNumber}
                                                    class='form-control'
                                                />
                                            </div>
                                            <div class='form-holder'>
                                                <input
                                                    type='text'
                                                    placeholder={account.Email}
                                                    class='form-control'
                                                />
                                            </div>
                                            <div class='form-holder'>
                                        <input
                                            type='text'
                                            placeholder={account.DoB}
                                            class='form-control'
                                        />
                                    </div>
                                        </div>
                                    </div>
                                    
                                    <div class='form-holder'>
                                        <input
                                            type='text'
                                            placeholder={account.Address}
                                            class='form-control'
                                        />
                                    </div>
                                    <div class='form-holder'>
                                        <input
                                            type='password'
                                            placeholder={account.Password}
                                            class='form-control'
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
