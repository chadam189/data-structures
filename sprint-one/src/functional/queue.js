var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.size++;
    storage[storage.size] = value;
  };

  someInstance.dequeue = function() {
    if (storage.size === 0) {
      return 'queue is empty';
    }
    var tempVar = storage['1'];
    for (var i = 1; i < storage.size; i++) {
      storage[i] = storage[i + 1];
    }
    storage.size--;
    return tempVar;
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
