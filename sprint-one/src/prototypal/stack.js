var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stackSize++;
  this[this.stackSize.toString()] = value;
};

stackMethods.pop = function() {
  if (this.stackSize === 0) {
    return 'stack is empty';
  }
  var popVal = this[this.stackSize.toString()];
  delete this[this.stackSize.toString()];
  this.stackSize--;
  return popVal;
};

stackMethods.size = function() {
  return this.stackSize;
};
