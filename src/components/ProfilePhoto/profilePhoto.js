import React, { useState } from 'react';
import { FaUserAlt, FaTrashAlt } from 'react-icons/fa';

const ProfilePhoto = ({ getData, imageSrc }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggleClick = () => {
        setToggle(true);
        getData(true, imageSrc);
    };

    const deletePic = () => {
        setToggle(false);
        getData(false, '');
    };

    return (
        <div className='container'>
            <button
                type='button'
                onClick={handleToggleClick}
                className='btn btn-primary rounded-circle mt-2 opaque profile-pic'
                disabled={toggle && imageSrc}
            >
                {(!toggle || !imageSrc) && (
                    // <FaUserAlt color='white' size='3x' />
                    <img
                        src={require(`../../assets/images/avatars/11.png`)}
                        alt='...'
                        className='d-block avatar'
                    />
                )}
                {toggle && imageSrc && (
                    <img
                        alt='profile'
                        src={imageSrc}
                        className='rounded-circle'
                        width='100%'
                    />
                )}
            </button>
            {toggle && imageSrc && (
                <button
                    type='button'
                    className='btn btn-danger rounded-circle position-relative delete-button'
                    onClick={deletePic}
                >
                    <FaTrashAlt color='white' size='xs' />
                </button>
            )}
        </div>
    );
};

export default ProfilePhoto;
