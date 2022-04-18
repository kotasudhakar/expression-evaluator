//concatenate('Fruits: ', join('apple', 'grape', 'banana', 'orange', ', '))
//concatenate('Hello', ' ', pickRandom('Sudhakar', 'Ravi', 'Ramana'))
const { concatenate, pickRandom, join } = require('./Functions.js');
const Stack = require('./stack');

var isString = (s) => {
  let re = /^\'[^\']*\'$/;
  if (re.test(s)) {
    return true;
  } else {
    return false;
  }
};

var remQuote = (s) => {
  let str = '';
  if (s.length >= 3) {
    for (let i = 1; i < s.length - 1; i++) {
      str += s[i];
    }
  }
  return str;
};

var calculate = (s) => {
  let result = '';
  const resultStack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "'") {
      for (let p = i + 1; p < s.length; p++) {
        if (s.charAt(p) == "'") {
          result = "'" + result + "'";
          resultStack.push(result.trim());
          result = '';
          i = p;
          break;
        }
        result += s.charAt(p);
      }
      continue;
    } else if (s.charAt(i) == ',') {
      if (result != '') {
        resultStack.push(result.trim());
      }
      result = '';
      continue;
    } else if (s.charAt(i) == '(') {
      if (result !== '') {
        resultStack.push(result.trim());
      }
      resultStack.push('(');
      result = '';
      continue;
    } else if (s.charAt(i) == ')') {
      if (result != '') {
        resultStack.push(result.trim());
      }
      resultStack.push(')');
      result = '';
      continue;
    }
    //To check if its okay to block other brackets outside the single quotes or strings
    // else if (s.charAt(i) == ']' || s.charAt(i) == '[' || s.charAt(i) == '{' || s.charAt(i) == '}' || s.charAt(i) == '[' || s.charAt(i) == '"'){

    // }
    result += s.charAt(i);
  }
  return resultStack.items;
};
// console.log(calculate("concatenate('Hello', ' ', pickRandom('Sudhakar', 'Ravi', 'Ramana'))"));

var array1 = ['concatenate', '(', "'Fruits: '", ' join', '(', "'apple'", "' grape'", "' banana'", "' orange'", "' , '", ')', ' pickRandom', '(', "'Sudhakar'", "' Ravi'", "' Ramana'", ')', ')'];
var array2 = ['concatenate', '(', "'Hello'", "'  '", 'pickRandom', '(', "'Sudhakar'", "' Ravi'", "' Ramana'", ')', ')'];

var stackExecution = (arr) => {
  let output = [];
  let currParameters = [];

  let currFn = '';
  const fnStack = new Stack();
  const paraStack = new Stack();
  //   let stack = new Stack();
  for (i = 0; i < arr.length; i++) {
    // console.log(fnStack);
    if (isString(arr[i])) {
      currParameters.push(remQuote(arr[i]));
      continue;
    } else if (arr[i] == '(') {
      if (currFn !== '') {
        fnStack.push(currFn);
      }
      if (currParameters.length !== 0) {
        paraStack.push(currParameters);
      }
      currFn = '';
      currParameters = [];
      continue;
    } else if ((arr[i] == 'concatenate' || arr[i] == 'join' || arr[i] == 'pickRandom') && arr[i + 1] == '(') {
      if (currFn != '') {
        currFn.push(currFn);
      }
      currFn = arr[i];
      continue;
    } else if (arr[i] == ')') {
      if (currFn == '') {
        currFn = fnStack.pop();
      }
      switch (currFn) {
        case 'concatenate':
          var res = [concatenate(...currParameters)];
          // code block
          break;
        case 'join':
          var res = [join(...currParameters)];
          // code block
          break;
        case 'pickRandom':
          var res = [pickRandom(...currParameters)];
          // code block
          break;
        default:
        // code block
      }

      currParameters = [...paraStack.pop(), ...res];
      res = [];
      currFn = '';
    }
  }
  return currParameters[0];
};

console.log(stackExecution(array1));
