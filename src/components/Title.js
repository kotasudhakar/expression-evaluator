import React from 'react';
import { FaCode } from 'react-icons/fa';
import './Title.css';
const Title = () => {
  return (
    <div className='title'>
      <FaCode className='icon' />
      <h1>
        Expression <span className='purple'>Evaluator</span>
      </h1>
    </div>
  );
};

export default Title;
