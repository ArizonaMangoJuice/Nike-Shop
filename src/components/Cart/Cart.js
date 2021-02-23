import React, {useContext} from 'react';
import './Cart.css';
import logo from '../../images/logo.png';
import Context from '../../store/context';
import CartItem from '../CartItem';


const Cart = props => {

    const {state} = useContext(Context);
    const cartItem = state.items.map(e => (
        <CartItem title={e.title} price={e.price} amount={e.amount} image={e.image} bg={e.bg}/>
    ));

    return (
        <div className='items-container'>
            <div className='blob'></div>
            <div className='logo-container'>
                <img className='logo' alt='nike logo' src={logo} />
            </div>
            <h1 className='items-container-title'>Your Cart</h1>
            {cartItem}
        </div>
    )
};

export default Cart;