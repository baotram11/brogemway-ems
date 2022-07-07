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
                                <h4> </h4>
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
                                                    type='file'
                                                    name='file-1[]'
                                                    id='file-1'
                                                    class='inputfile'
                                                    data-multiple-caption='{count} files selected'
                                                    multiple
                                                />
                                                <label for='file-1'>
                                                    <i class='zmdi zmdi-camera'></i>
                                                    <span>Chọn ảnh</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class='form-group'>
                                            <div class='form-holder active'>
                                                {<input
                                                    type='text'
                                                    placeholder='First Name'
                                                    class='form-control'
                                                />}
                                            </div>
                                            <div class='form-holder'>
                                                <input
                                                    type='text'
                                                    placeholder='Last Name'
                                                    class='form-control'
                                                />
                                            </div>
                                            <div class='form-holder'>
                                                <input
                                                    type='text'
                                                    placeholder='Team Name'
                                                    class='form-control'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class='form-holder'>
                                        <input
                                            type='text'
                                            placeholder='Email'
                                            class='form-control'
                                        />
                                    </div>
                                    <div class='form-holder'>
                                        <input
                                            type='password'
                                            placeholder='Create a password'
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
