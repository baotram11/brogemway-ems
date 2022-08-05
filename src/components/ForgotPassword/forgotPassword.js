import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const {
        authenticated,
        forgotFormData,
        formErrors,
        forgotPasswordChange,
        forgotPassowrd,
    } = this.props;

    if (authenticated) return navigate('/login');

    const handleSubmit = (event) => {
        event.preventDefault();
        forgotPassowrd();
    };
    return (
        <div className='forgot-password-form'>
            <h2>Forgot Password</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col'>
                        <input
                            type={'text'}
                            label={'Email Address'}
                            name={'email'}
                            placeholder={'Please Enter Your Email'}
                            onInputChange={(name, value) => {
                                forgotPasswordChange(name, value);
                            }}
                        />
                    </div>
                </div>
                <hr />
                <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
                    <button type='button' class='btn btn-outline-primary'>
                        Send email
                    </button>
                    <Link className='redirect-link' to={'/login'}>
                        Back to login
                    </Link>
                </div>
            </form>
        </div>
    );
};
export default ForgotPassword;
