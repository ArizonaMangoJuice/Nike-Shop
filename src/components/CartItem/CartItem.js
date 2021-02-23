import React, {useContext, useState} from 'react';
import './CartItem.css';

const CartItem = ({amount, title, image, price, bg}) => {
    return (
        <div className='cart-item'>
            <div className='image-container' style={{backgroundColor: bg}}>
                <img src={image.default} />
            </div>
            <div className='text-container'>
                <p className='cart-title'>{title}</p>
                <p className='cart-price'>${price}</p>
                <div className='amount-container'>
                    <button className='cart-buttons'>&lt;</button>
                    <p className='cart-amount'>{amount}</p>
                    <button className='cart-buttons'>&gt;</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem;