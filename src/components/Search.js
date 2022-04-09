import React from 'react';
import { useState } from 'react';
import Itemlist from './Itemlist';
import './Item.css';

const Search = () => {
  const join = (...arr) => {
    try {
      //reading the operator and storing it in the operator variable like ',' , '+' , ' ' or any
      let operator = arr[arr.length - 1];
      if (arr.length < 3) {
        throw new Error('join function should aleast contain three parameters. ');
      }
      //removing the last element(operator) from the arr and joining it by using join method
      arr.pop();
      var joined = arr.join(operator);
      return joined;
    } catch (e) {
      throw new Error(e.message + 'Error Occured while running the join function');
    }
  };

  //Selecting a random element

  const pickRandom = (...arr) => {
    try {
      //picking a random numbner in the range of arr index using Math.floor & Math.random
      let ranElement = arr[Math.floor(Math.random() * arr.length)];
      return ranElement;
    } catch (e) {
      throw new Error(e.message + 'Error Occured while running the pickRandom function');
    }
  };

  //concatenating the multiple arguments
  const concatenate = (...Arg) => {
    try {
      //concatenating the agruments bu using join(Array method).
      return Arg.join('');
    } catch (e) {
      throw new Error(e.message + 'Error Occured while running the concatenate function');
    }
  };

  const [expression, setExpression] = useState('');
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  // const addItem = () => {
  //   setItems([...items, { id: items.length , expression: expression, res: res, error: error }]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //     var str=expression.trim();
    // if(str.charAt(expression(0))=``)
    try {
      setRes(null);
      setError(null);

      var finalRes = null;
      var finalError = null;
      eval(expression);
      //if ran successfully, will update the res variable to the result.
      finalRes = eval(expression);
      setRes(eval(expression));
    } catch (e) {
      //if got an error, updating the error variable

      finalError = e.message;
      setError(e.message);
      console.log(e.message);
    } finally {
      setItems([...items, { id: items.length + 1, expression: expression, res: finalRes, error: finalError }]);
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' className='search-bar' value={expression} required onChange={(e) => setExpression(e.target.value)} placeholder='     Enter Expression' />
        <input type='submit' className='btn' value='Evaluate'></input>
      </form>
      {res && (
        <div>
          <h4 className='result'>Result : {res}</h4>
        </div>
      )}
      {error && (
        <div>
          <h4 className='error'>Error : {error}</h4>
        </div>
      )}
      <Itemlist items={items} />
    </div>
  );
};

export default Search;
