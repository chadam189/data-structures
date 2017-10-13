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

/*
 * Complexity: What is the time complexity of the above functions?
 */
