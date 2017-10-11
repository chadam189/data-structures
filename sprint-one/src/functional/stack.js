var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage.size++;
    storage[storage.size.toString()] = value;
  };
  
  someInstance.pop = function() {
    if (storage.size === 0) {
      return 'stack is empty';
    }
    var popValue = storage[storage.size];
    delete storage[storage.size];
    storage.size--;
    return popValue;
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
