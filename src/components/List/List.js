import React, {useContext} from 'react';

import Context from '../../store/context';

const List = () => {
    const {state} = useContext(Context);
    let cartItem;

    state.items[0]
       ? cartItem = state.items[0].title
       : cartItem = 'hello';

    return (
        <>
            <h3>{cartItem}</h3>
        </>
    )
};

export default List;