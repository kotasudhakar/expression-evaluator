// 4. Examples of valid expressions:
// - 'hello! how are you?'
// - concatenate('Hello', ' '. pickRandom('Sudhakar', 'Ravi', 'Ramana'))
// - concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '))
var join = (...arr) => {
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

// const pickRandom = (...arr) => {
//   let ranElement = arr[Math.floor(Math.random() * arr.length)];
//   return ranElement;
// };

var pickRandom = function (...arr) {
  let ranElement = arr[Math.floor(Math.random() * arr.length)];
  return ranElement;
};

//Selecting a random element
// const pickRandom = (...arr) => {
//   let ranElement = arr[Math.floor(Math.random() * arr.length)];
//   return ranElement;
// };

//concatenating the multiple arguments
var concatenate = (...Arg) => {
  return Arg.join('');
  //need to break the array and convert it to values and concatenate it back.
};

// var inputStr = concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '));

// 'hello, how are you?';
// join('apple', 'grape', 'banana', 'orange', ',');
// pickRandom('Sudhakar', 'Ravi', 'Ramana');
// concatenate('Hello', ' ', pickRandom('Sudhakar', 'Ravi', 'Ramana'));

// console.log(concatenate('Hello', ' ', pickRandom('Sudhakar', 'Ravi', 'Ramana')));
// concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '));
// console.log(String(concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '))));

// var str = 'pickRandom';
// var fn = Function("pickRandom('Sudhakar', 'Ravi', 'Ramana')");
// fn();

// var fnstring = "runMe";

// switch (fnstring) {
// 	case "functionX": functionX(); break;
// 	case "functionY": functionY(); break;
// 	case "functionZ": functionZ(); break;
// 	case "runMe": runMe(); break;
// }

var str = `pickRandom('Sudhakar', 'Ravi', 'Ramana')`;
var fn = Function('return ' + str);
console.log(typeof pickRandom);

const cheese = 'gouda';
const calc = (a, b, operator) => {
  return Function('...args', `console.log(args)`)(a, b, cheese);
};
console.log(calc(5, 5, '+'));
console.log(`---------------------------------------------`);
const listOfFnStrings = ['pickRandom', 'concatenate', 'join'];
const listOfFunctions = [pickRandom, concatenate, join];

const fnStr = `pickRandom('Sudhakar', 'Ravi', 'Ramana')`;
const strToFn = (a, b, operator) => {
  return Function(...listOfFnStrings, `return ${fnStr}`)(pickRandom, concatenate, join);
};
console.log(typeof strToFn);
console.log(typeof fnStr);

console.log(strToFn(fnStr));
