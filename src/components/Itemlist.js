import React from 'react';
import Item from './Item';
import './Item.css';

const Itemlist = ({ items }) => {
  return (
    <div className='container'>
      <div>
        {items.length > 0 && (
          <div className='heading'>
            <p>Id</p>
            <p>Expression</p>
            {/* <p>Result</p>
            <p>Error</p> */}
            <p>Output</p>
          </div>
        )}

        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Itemlist;
