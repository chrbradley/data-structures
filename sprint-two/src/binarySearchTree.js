var makeBinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  _.extend(newBinaryTree, binaryTreeMethods);

  return newBinaryTree;
};

var binaryTreeMethods = {

  insert: function(value) {

    var placeValue = function(node) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = makeBinarySearchTree(value);
        } else {
          placeValue(node.left);
        }
      }

      if (value > node.value) {
        if (node.right === null) {
          node.right = makeBinarySearchTree(value);
        } else {
          placeValue(node.right);
        }
      }
    };

    placeValue(this);

  },

  contains: function(lookingFor) {

    var checkValue = function(node) {
      if (node.value === lookingFor) {
        return true;
      }

      if (node.left) {
        if (checkValue(node.left)) {
          return true;
        }
      }

      if (node.right) {
        if(checkValue(node.right)) {
          return true;
        }
      }
      return false;
    };

    return checkValue(this);

  },

  depthFirstLog: function(callback) {

    var hollerBack = function(node) {

      callback(node.value);
      if (node.left) {
        hollerBack(node.left);
      }
      if (node.right) {
        hollerBack(node.right);
      }

    };

    hollerBack(this);
  }
};


// var binarySearchTree = makeBinarySearchTree(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);

/*
 * Complexity: What is the time complexity of the above functions?
 */