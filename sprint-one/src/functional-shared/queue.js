var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.queueSize = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.queueSize++;
  this[String(this.queueSize)] = value;
};

queueMethods.dequeue = function() {
  if (this.queueSize === 0) {
    return 'queue is empty';
  }
  var dequeueVal = this['1'];
  for (var i = 1; i < this.queueSize; i++) {
    this[String(i)] = this[String(i + 1)];
  }
  delete this[String(this.queueSize)];
  this.queueSize--;
  return dequeueVal;
};

queueMethods.size = function() {
  return this.queueSize;
};