import React from 'react';
import './Items.css';
import {data} from '../../Data/data';
import Item from '../Item/Item';
import logo from '../../images/logo.png';

const Items = props => {
    const shoes = data.map(e => (
        <Item 
            key={e.title}
            title={e.title}
            desc={e.desc}
            price={e.price}
            image={require('../../images/' + e.imgUrl)}
            bg={e.bgColor}
        />
    ));

    return (
        <div className='items-container'>
            <div className='blob'>

            </div>
            <div className='logo-container'>
                <img className='logo' alt='nike logo' src={logo} />
            </div>
            <h1 className='items-container-title'>Picked items</h1>
            {shoes}
        </div>
    )
};

export default Items;