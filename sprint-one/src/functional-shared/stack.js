var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.stackSize = 0;
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stackSize++;
  this[String(this.stackSize)] = value;
};

stackMethods.pop = function() {
  if (this.stackSize === 0) {
    return 'stack is empty';
  }
  var popValue = this[String(this.stackSize)];
  delete this[String(this.stackSize)];
  this.stackSize--;
  return popValue;
};

stackMethods.size = function() {
  return this.stackSize;
};