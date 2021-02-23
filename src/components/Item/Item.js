import React, {useState} from 'react';
import './Item.css';

const Item = ({title, desc, image, price, bg}) => {
    const [isClicked, setClicked] = useState(false);

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

                    onClick={() => setClicked(e => !e)} 
                    className={isClicked ? 'clicked-item' : 'item-button'}
                >{isClicked ? '✓' : 'ADD TO CART'}</button>
            </div>
        </div>
    )
}


export default Item;