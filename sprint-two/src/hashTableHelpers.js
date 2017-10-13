/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  

  var limitedArray = {};
  limitedArray.storage = [];
  limitedArray.tupleCount = 0;
  limitedArray.get = function(index, key) {
    checkLimit(index);
    // find the index of the tuple within the storage array
    var tupleIndex = -1; 
    for (var i = 0; i < limitedArray.storage[index].length; i++) {
      if (limitedArray.storage[index][i][0] === key) {
        tupleIndex = i;
      }
    }
    if (tupleIndex === -1) {
      return;
    } 
    return limitedArray.storage[index][tupleIndex][1];
  };
  
  limitedArray.set = function(index, key, value) {
    checkLimit(index);
    // if this is first time setting anything at this index
    if (Array.isArray(limitedArray.storage[index]) === false) {
      limitedArray.storage[index] = [];
    }
    // check whether this key/value pair is already at this index
    // for (var i = 0; i < limitedArray.storage[index].length; i++) {
    //   if (limitedArray.storage[index][i][0] === key) {
    //     return;
    //   }
    // }
    // limitedArray.storage[index].forEach(function(elem) {
    //   if (limitedArray.storage[index][i][0] === key) {
    //     return;
    //   }
    // });
    // add key/value pair to this index
    this.tupleCount++;
    limitedArray.storage[index].push([key, value]);
  };
  
  limitedArray.each = function(callback) {
    for (var i = 0; i < limitedArray.storage.length; i++) {
      callback(limitedArray.storage[i], i, limitedArray.storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
