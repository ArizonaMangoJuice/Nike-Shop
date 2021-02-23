import React, {useState, useContext} from 'react';
import './Item.css';

import Context from '../../store/context';

const Item = ({title, desc, image, price, bg}) => {
    const [isClicked, setClicked] = useState(false);
    const {state, actions}  = useContext(Context);

    return (
        <div className='item'>
            <div className='item-image-container' style={{backgroundColor: bg}}>
                <img 
                    alt={`nike ${image} shoe`}
                    className='item-image' 
                    src={image.default}
                    />
            </div>
            <p className='item-title'>{title}</p>
            <p className='item-desc'>{desc}</p>
            <div className='item-bottom'>
                <p className='price'>${price}</p>
                <button
                    onClick={() => {
                        if(isClicked) return; 
                        setClicked(e => !e);
                        actions({
                            type: 'setState', 
                            payload: {
                                ...state, 
                                items: [
                                    ...state.items,
                                    {title,image,price,amount: 1,bg}
                                ]
                            }
                        });
                    }} 
                    className={isClicked ? 'clicked-item' : 'item-button'}
                >{isClicked ? '✓' : 'ADD TO CART'}</button>
            </div>
        </div>
    )
}


export default Item;