import React from 'react';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className='item-row'>
      <p className='item-width'>{item.id}</p>
      <p className='item-width'>{item.expression}</p>
      {item.res && <p className='item-width result'>{item.res}</p>}

      {item.error && <p className='item-width error'>{item.error}</p>}
    </div>
  );
};

export default Item;
