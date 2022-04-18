var Stack = require('./Stack.js');

const isValidParaQuo = (s) => {
  const stack = new Stack();

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && stack.peek() === '(' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

//  else if (s[i] == '"'){
//   console.log('Invalid Quotes detected');
//   return false;
// }
// else if (s.charAt(i) == ']' || s.charAt(i) == '[' || s.charAt(i) == '{' || s.charAt(i) == '}' || s.charAt(i) == '[' || s.charAt(i) == '"') {
//   console.log('Invalid Quotes or Brackets detected');
// }
// else if(s[i] = ',' && i>0){
//   if(s[i]==',' &&s[i-1]==','){
//     console.log("Invalid commas detece");
//   }

// }

// module.exports = isValidParaQuo;
console.log(isValidParaQuo('(())'));
