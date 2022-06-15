import React from 'react';
import Navbar from '../../Components/NavBar/navbar';

import './header.scss';

const Header = () => {
    return (
        <div className='Header'>
            <Navbar />
            <header class='masthead'></header>
        </div>
    );
};

export default Header;
