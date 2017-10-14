var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = this;
};

treeMethods.contains = function(target) {
  // search current node
  if (this.value === target) {
    // if found, return true
    return true;
  }
  // else, search current node's children
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target) === true) {
      return true;
    }
  }
  // else, found no match, return false
  return false;
};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};

treeMethods.traverse = function(callback) {
  // run callback on current node
  callback(this);
  // run callback on children
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
