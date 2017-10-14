var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if list is empty
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      var temp = this.tail;
      this.tail = Node(value);
      temp.next = this.tail;
      this.tail.prev = temp;
    }
  };

  list.removeHead = function() {
    if (this.head === null) {
      return 'Linked list is empty.';
    } else if (this.head === this.tail) {
      // this runs if there is only one item in the list
      // ...which is about to be deleted 
      this.tail = null;
    }
    var removeHeadVal = this.head.value;
    this.head = this.head.next;
    if (this.head !== null) {
      // if we didn't just remove the only item in the list, then update the new head's prev pointer
      this.head.prev = null;  
    }
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */