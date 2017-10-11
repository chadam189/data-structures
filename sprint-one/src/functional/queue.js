var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.size++;
    var newIndex = String(storage.size);
    storage[newIndex] = value;
  };

  someInstance.dequeue = function() {
    if (storage.size === 0) {
      return 'Queue is empty';
    } else {
      var returnedValue = storage['1'];
      for (var i = 1; i < storage.size; i++) {
        storage[String(i)] = storage[String(i + 1)];
      }
      delete storage[String(storage.size)];
      storage.size--;
      return returnedValue;
    }
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
