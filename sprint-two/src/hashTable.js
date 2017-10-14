

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, val) {
  // give us index to store
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(index, key, val);
  if (this._storage.tupleCount >= this._limit * 0.75) {
    this.doubleUp();
  }
};

HashTable.prototype.retrieve = function(key) {
  // give us index to retrieve
  var index = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(index, key);
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage.deletePair(index, key);
  if (this._storage.tupleCount <= this._limit * 0.25 && this._limit > 8) {
    this.cutInHalf();
  }
};

HashTable.prototype.doubleUp = function() {
  var tempHashTable = new HashTable();
  tempHashTable._limit = this._limit * 2;
  tempHashTable._storage = LimitedArray(tempHashTable._limit);
  var tempStorage = this._storage.storage.reduce(function(acc, val) {
    return acc.concat(val);
  }, []);
  tempStorage.forEach(function(val) {
    tempHashTable.insert(val[0], val[1]);
  });
  this._limit = tempHashTable._limit;
  this._storage = tempHashTable._storage;
};

HashTable.prototype.cutInHalf = function() {
  var tempHashTable = new HashTable();
  tempHashTable._limit = this._limit * 0.5;
  tempHashTable._storage = LimitedArray(tempHashTable._limit);
  var tempStorage = this._storage.storage.reduce(function(acc, val) {
    return acc.concat(val);
  }, []);
  tempStorage.forEach(function(val) {
    tempHashTable.insert(val[0], val[1]);
  });
  this._limit = tempHashTable._limit;
  this._storage = tempHashTable._storage;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


