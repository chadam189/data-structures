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
    
    // if this key isn't found, then return nothing
    if (tupleIndex === -1) {
      return;
    } 
    
    return limitedArray.storage[index][tupleIndex][1];
  };
  
  limitedArray.set = function(index, key, value) {
    checkLimit(index);
    // if this is the first time setting anything at this index
    if (Array.isArray(limitedArray.storage[index]) === false) {
      limitedArray.storage[index] = [];
    }
    
    // check for this key
    // determine whether this is a new key entry, or if we're overwriting an existing value for this key 
    var tupleIndex = -1; 
    for (var i = 0; i < limitedArray.storage[index].length; i++) {
      if (limitedArray.storage[index][i][0] === key) {
        tupleIndex = i;
      }
    }
    
    // if duplicate is not found, then we are adding a new key/value pair to the hash table, so increase the tuple counter
    if (tupleIndex === -1) {
      this.tupleCount++;
    } 
    
    // add key/value pair (or overwrite existing value for the given key) at this index
    limitedArray.storage[index].push([key, value]);
  };
  
  limitedArray.deletePair = function(index, key) {
    checkLimit(index);
    // if there are no key/value pairs at this index, do nothing
    if (Array.isArray(limitedArray.storage[index]) === false) {
      return;
    }
    
    // find the index of the key/value pair to be removed
    var tupleIndex = -1; 
    for (var i = 0; i < limitedArray.storage[index].length; i++) {
      if (limitedArray.storage[index][i][0] === key) {
        tupleIndex = i;
      }
    }
    
    // if the key/value pair is not found, then do nothing
    if (tupleIndex === -1) {
      return;
    } 
    
    this.tupleCount--;
    limitedArray.storage[index].splice(tupleIndex, 1);
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
