import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt=""/>
            </div>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory Management</a>
                
            </nav>
        </div>
    );
};

export default Header;