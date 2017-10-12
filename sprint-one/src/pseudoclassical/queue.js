var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.queueSize++;
  this[this.queueSize.toString()] = value;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize === 0) {
    return 'queue is empty';
  }
  var dequeueVal = this['1'];
  for (var i = 1; i < this.queueSize; i++) {
    this[i.toString()] = this[String(i + 1)];
  }
  delete this[this.queueSize.toString()];
  this.queueSize--;
  return dequeueVal;
};

Queue.prototype.size = function() {
  return this.queueSize;
};


