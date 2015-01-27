var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = makeNode(value);
    if (list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    }
    var oldTail = list.tail;
    list.tail = newTail;
    oldTail.next = list.tail;
  };

  list.removeHead = function(){
    var oldHead = list.head;
    var newHead = list.head.next;
    list.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target){

    var checkValue = function (node) {
      node = node || this;
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return checkValue(node.next);
      }
    };
    return checkValue(this.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */