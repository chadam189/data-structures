var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var keyName = String(item);
  this._storage[keyName] = 0;
};

setPrototype.contains = function(item) {
  var keyName = String(item);
  return this._storage.hasOwnProperty(keyName);
};

setPrototype.remove = function(item) {
  var keyName = String(item);
  delete this._storage[keyName];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
