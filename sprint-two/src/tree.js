var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
