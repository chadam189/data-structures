var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var currentBucket = this._storage.get(index);
  // initialize bucket as needed
  if (currentBucket === undefined) {
    currentBucket = [];
  }
  // check if key already exists
  var keyIndex = -1;
  for (var i = 0; i < currentBucket.length; i++) {
    if (currentBucket[i][0] === key) {
      keyIndex = i;
      currentBucket[i][1] = value;
    }
  }
  if (keyIndex === -1) {
    currentBucket.push([key, value]);
    this._tupleCount++;
  }
  this._storage.set(index, currentBucket);
  if (this._tupleCount >= this._limit * 0.75) {
    this.resizeTable(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var currentBucket = this._storage.get(index);
  for (var i = 0; i < currentBucket.length; i++) {
    if (currentBucket[i][0] === key) {
      return currentBucket[i][1];
    }
  }
  // if key not found, return empty
  return;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var currentBucket = this._storage.get(index);
  // initialize bucket as needed
  if (currentBucket === undefined) {
    currentBucket = [];
  }
  // check if key already exists
  var keyIndex = -1;
  var newBucket = [];
  for (var i = 0; i < currentBucket.length; i++) {
    if (currentBucket[i][0] === key) {
      keyIndex = i;
      this._tupleCount--;
    } else {
      newBucket.push(currentBucket[i]);
    }
  }
  // if key not found, return empty;
  if (keyIndex === -1) {
    return;
  }
  // else, store the revised bucket
  this._storage.set(index, newBucket);
  if (this._tupleCount <= this._limit * 0.25 && this._limit > 8) {
    this.resizeTable(this._limit * 0.5);
  }
};

HashTable.prototype.resizeTable = function(newLimit) {
  var tempHashTable = new HashTable();
  tempHashTable._limit = newLimit;
  tempHashTable._storage = LimitedArray(tempHashTable._limit);
  var tempStorage = [];
  for (var i = 0; i < this._limit; i++) {
    tempStorage = tempStorage.concat(this._storage.get(i));
  }
  tempStorage.forEach(function(val) {
    if (val !== undefined) {
      tempHashTable.insert(val[0], val[1]);
    }
  });
  this._limit = tempHashTable._limit;
  this._storage = tempHashTable._storage;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */