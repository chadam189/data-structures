var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail !== null) {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    } else {
      this.tail = Node(value);
    }
    if (this.head === null) {
      this.head = this.tail;
    }

  };

  list.removeHead = function() {
    if (this.head === null) {
      return 'Linked list is empty.';
    }
    var removeHeadVal = this.head.value;
    this.head = this.head.next;
    return removeHeadVal;
  };

  list.contains = function(target) {
    // when linked list has multiple items
    if (this.head !== this.tail) {
      var currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === target) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    // else when linked list has one item  
    } else if (this.head.value !== undefined) {
      return target === this.head.value;
    // else when linked list is empty
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */