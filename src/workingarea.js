// 4. Examples of valid expressions:
// - 'hello! how are you?'
// - concatenate('Hello', ' '. pickRandom('Sudhakar', 'Ravi', 'Ramana'))
// - concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '))

export const join = (...arr) => {
  //reading the operator and storing it in the operator variable like ',' , '+' , ' ' or any
  let operator = arr[arr.length - 1];

  //removing the last element(operator) from the arr
  arr.pop();

  //checking if atleast one element and an operator is passed
  if (arr.length > 2) {
    var joined = arr.join(operator);
  }

  return joined;
};

//Selecting a random element
export const pickRandom = (...arr) => {
  let ranElement = arr[Math.floor(Math.random() * arr.length)];
  return ranElement;
};

//concatenating the multiple arguments
export const concatenate = (...Arg) => {
  return Arg.join('');
  //need to break the array and convert it to values and concatenate it back.
};

// var inputStr = concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '));

// 'hello, how are you?';
// join('apple', 'grape', 'banana', 'orange', ',');
// pickRandom('Sudhakar', 'Ravi', 'Ramana');
// concatenate('Hello', ' ', pickRandom('Sudhakar', 'Ravi', 'Ramana'));

console.log(concatenate('Hello', ' ', pickRandom('Sudhakar', 'Ravi', 'Ramana')));
concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '));
console.log(String(concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '))));
