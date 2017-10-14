var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var keyName = JSON.stringify(item);
  this._storage[keyName] = 0;
};

setPrototype.contains = function(item) {
  var keyName = JSON.stringify(item);
  return this._storage.hasOwnProperty(keyName);
};

setPrototype.remove = function(item) {
  var keyName = JSON.stringify(item);
  delete this._storage[keyName];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
