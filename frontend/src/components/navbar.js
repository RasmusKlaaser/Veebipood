import React from 'react';
import './navbar.css';
import cart from './svg/shopping-cart.svg'

function Navbar() {
    let cartData = window.localStorage.getItem('cart');
    let cartObject = {};

    if (cartData) {
        try {
            cartObject = JSON.parse(cartData);
        } catch (e) {
            console.error("Error parsing cart data from localStorage", e);
        }
    }

    let productCount = Object.values(cartObject).reduce((total, count) => total + count, 0);
    return (
        <nav className='Navbar'>
            <ul>
                <a href='/'>Home</a>
                <a href='/#about'>About</a>
                <a href='/store'>Products</a>
                <div className='Cart'>
                    <div className='Cart-item-count'>
                        <p>{productCount}</p>
                    </div>
                    <a href='/checkout' ><img src={cart} className="Cart-logo"  alt="shopping cart" /></a>
                </div>
            </ul>
        </nav>
    );
};


export default Navbar;