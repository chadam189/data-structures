var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // checking to avoid duplicates
  if (value === this.value) {
    return;
  }
  // check left branch
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else { // check right branch
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // checking to avoid duplicates
  if (value === this.value) {
    return true;
  }
  // check left branch
  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else { // check right branch
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // callback of this node's value
  callback(this.value);
  // callback of left branch's value
  // then recursively on left branch's children 
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  // callback of left branch's value
  // then recursively on left branch's children 
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(callback) {
  // queue is equal to new Queue()
  // add tree.val to queue
  var queue = new Queue();
  queue.enqueue(this.value);
  // if tree is null (empty) then return
    
  // while (something..potentially :
  var currentLevel = [];
  currentLevel.push(this);
  var nextLevel = [];
  
  do {
    nextLevel = [];
    for (var i = 0; i < currentLevel.length; i++) {
      nextLevel.push(currentLevel[i].left);
      nextLevel.push(currentLevel[i].right);
    }
    for (var i = 0; i < nextLevel.length; i++) {
      // if (nextLevel[i] === null || nextLevel[i] === undefined) {
      if (nextLevel[i]) {
        queue.enqueue(nextLevel[i].value);
      }
    }
    currentLevel = nextLevel;
  } while (nextLevel.every(function(val) {
    return (val !== undefined && val !== null);
  }));
  
  // }
  // EASY PART!!! 
  // dequeue each item on Q, and take that value
  var temp1 = queue.size();
  for (var j = 0; j < temp1; j++) {
    var temp = queue.dequeue();
    callback(temp);
  }
  // and pass it through callback
};

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








/*
 * Complexity: What is the time complexity of the above functions?
 */
