var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // make a new node
    var temp = makeNode(value);
    // if there is no head
    if ( list.head === null ){
      // set head to node
      list.head = temp;
      // set tail to node
      list.tail = temp;
    } else {
      // set current tail's next to node
      list.tail.next = temp;
      // update tail
      list.tail = temp;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    delete list.head;
    list.head = temp.next;
    return temp.value;
  };

  list.contains = function(target) {

    var checkForTarget = function(target, node) {
      // initialize node
      var node = node || list.head;
      // establish base case
      if ( node.value === target ) {
        return true;
      // else check next.value
      } else {
        // if no next
        if ( node.next === null ) {
          return false;
        } else {
        // update node
        node = node.next;
        // make recursive call
        return checkForTarget(target,node);
        }
      }
    }
    // call recursive function
    // MAKE SURE TO RETURN OR RECURSIVE
    // RETURNS WON'T BUBBLE UP TO THE
    // PROPER SCOPE
    return checkForTarget(target);
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
