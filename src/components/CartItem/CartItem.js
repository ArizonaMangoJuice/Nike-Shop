import React, {useContext} from 'react';
import './CartItem.css';
import Context from '../../store/context';

const CartItem = ({amount, title, image, price, bg}) => {
    const {state, actions} = useContext(Context);

    return (
        <div className='cart-item'>
            <div className='image-container' style={{backgroundColor: bg}}>
                <img src={image.default} alt={`shoe ${image}`} />
            </div>
            <div className='text-container'>
                <p className='cart-title'>{title}</p>
                <p className='cart-price'>${price}</p>
                <div className='amount-container'>
                    <button onClick={() => {
                        let updatedItem = state.items.map(e => e.title === title ? {...e, amount: e.amount - 1} : e);

                        console.log('this is the item', updatedItem); 
                        actions({
                            type: 'decrement',
                            payload: {
                                ...state,
                                items: updatedItem
                            }
                        });
                    }} className='cart-buttons'>&lt;</button>
                    <p className='cart-amount'>{amount}</p>
                    <button className='cart-buttons'>&gt;</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem;