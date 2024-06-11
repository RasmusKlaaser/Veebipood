import React from 'react';
import './navbar.css';
import cart from './svg/shopping-cart.svg'

function Navbar() {
    return (
        <nav className='Navbar'>
            <ul>
                <a href='/'>Home</a>
                <a href='/#about'>About</a>
                <a href='/store'>Products</a>
                <div className='Cart'>
                    <div className='Cart-item-count'>
                        <p>0</p>
                    </div>
                    <img src={cart} className="Cart-logo" alt="shopping cart" />
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;