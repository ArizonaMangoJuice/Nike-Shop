import React, {useContext} from 'react';

import Context from '../../store/context';
import CartItem from '../CartItem';

const List = () => {
    const {state} = useContext(Context);
    const cartItem = state.items.map(e => (
        <CartItem title={e.title} price={e.price} amount={e.amount} image={e.image} bg={e.bg}/>
    ));

    

    return (
        <>
            <h3>{cartItem}</h3>
        </>
    )
};

export default List;