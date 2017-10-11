var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage.size++;
    var newIndex = String(storage.size);
    storage[newIndex] = value;
  };

  someInstance.pop = function() {
    if (storage.size === 0) {
      return 'Stack is empty';
    } else {
      var returnedIndex = String(storage.size);
      storage.size--;
      return storage[returnedIndex];
    }
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
