import React from 'react';
import { useState } from 'react';
import Itemlist from './Itemlist';
import './Item.css';

const Search = () => {
  var join = (...arr) => {
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

  var pickRandom = (...arr) => {
    try {
      //picking a random numbner in the range of arr index using Math.floor & Math.random
      let ranElement = arr[Math.floor(Math.random() * arr.length)];
      return ranElement;
    } catch (e) {
      throw new Error(e.message + 'Error Occured while running the pickRandom function');
    }
  };

  //concatenating the multiple arguments
  var concatenate = (...Arg) => {
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
    // window.alert('hi');
    //     var str=expression.trim();
    // if(str.charAt(expression(0))=``)
    try {
      setError(null);
      setRes(null);

      var finalRes = null;
      var finalError = null;
      var fnStr = expression;
      console.log(fnStr);

      //Stroring the list of all the available functions in our program to array.
      //so that later to pass these as all func as parameters using the spread operator
      const listOfFnStrings = ['pickRandom', 'concatenate', 'join'];

      ////As the outer functions are not accessible, hence passing the avalable functions as arguments,
      // to make it available for the scope inside the strToFn function

      const strToFn = (a, b, operator) => {
        return Function(...listOfFnStrings, `return ${fnStr}`)(pickRandom, concatenate, join);
      };

      //if ran successfully, will update the res variable to the result.

      finalRes = strToFn(fnStr);
      setRes(finalRes);

      //Yet to check the below method...
      //As of now, does not work as window cannot access the react component functions as these are not in the global scope
      //Tip: make the functions.js file directly avaialbe as src in the index.js to make the below method work.
      //
      // var functionName = 'concatenate';
      // var x = window['concatenate']('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '));
      // console.log(x);
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
