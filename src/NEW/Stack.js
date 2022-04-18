class Stack {
  constructor() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  push(e) {
    this.items.push(e);
  }
  pop() {
    if (this.items.length == 0) {
      return 'No elements in the arrar to pop';
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    var str = '';
    for (let i = 0; i < this.items.length; i++) {
      str = str + this.items[i] + ' ';
    }
    console.log(str);
    return str;
  }
}
module.exports = Stack;
