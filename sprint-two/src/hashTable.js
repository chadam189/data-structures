

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, val) {
  // give us index to store
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(index, key, val);
};

HashTable.prototype.retrieve = function(key) {
  // give us index to retrieve
  var index = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(index, key);
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(index, key, undefined);
  this._storage.tupleCount--;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


