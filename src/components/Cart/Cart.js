import React from 'react';
import './Cart.css';
import logo from '../../images/logo.png';

const Cart = props => {
    return (
        <div className='items-container'>
            <div className='blob'></div>
            <div className='logo-container'>
                <img className='logo' alt='nike logo' src={logo} />
            </div>
            <h1 className='items-container-title'>Your Cart</h1>
        </div>
    )
};

export default Cart;