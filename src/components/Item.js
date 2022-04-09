import React from 'react';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className='item-row'>
      <p className='item-width'>{item.id}</p>
      <p className='item-width'>{item.expression}</p>
      <p className='item-width'>{item.res}</p>
      
      <p className='item-width'>{item.error}</p>
    </div>
  );
};

export default Item;
