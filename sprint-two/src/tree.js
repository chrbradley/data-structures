var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  //  set-up recursive sub routine
  var checkTree = function(target, node) {
    // initialize node
    var node = node || this;
    // establish base case
    // if value matches
    if ( node.value === target ){
      return true;
    } else if ( node.children.length !== 0) {
      // if no match check for children
      for (var i = 0; i < node.children.length; i++ ) {
        // recursive call through all children
        // if any child returns true
        if (checkTree(target, node.children[i])) {
          return true;
        }
      }
      // if no child returns true
      return false;
    } else {
      // if there are no children on initial node
      return false;
    }
  }
  return checkTree(target, this)
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

 // lines 28 - 35 use _.any
