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

module.exports = { join, pickRandom, concatenate };
