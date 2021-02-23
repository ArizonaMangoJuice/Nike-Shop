import React, {useContext} from 'react';
import './CartItem.css';
import Context from '../../store/context';

const CartItem = ({amount, title, image, price, bg}) => {
    const {state, actions} = useContext(Context);

    // if(amount === '0') {
    //     let updateditems = state.items.filter(e => e.title !== title);
    //     console.log(updateditems);
    //     actions({
    //         type: 'remove',
    //         payload: {
    //             ...state,
    //             items: updateditems
    //         }
    //     })
    // }

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

                        let zeroChecker = updatedItem.filter(e => e.amount !== 0);
                        
                         actions({
                            type: 'decrement',
                            payload: {
                                ...state,
                                items: zeroChecker
                            }
                        });
                    }} className='cart-buttons'>&lt;</button>
                    <p className='cart-amount'>{amount}</p>
                    <button onClick={() => {
                        let updatedItem = state.items.map(e => e.title === title ? {...e, amount: e.amount + 1} : e);

                        actions({
                            type: 'increment',
                            payload: {
                                ...state,
                                items: updatedItem
                            }
                        });
                    }} className='cart-buttons'>&gt;</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem;