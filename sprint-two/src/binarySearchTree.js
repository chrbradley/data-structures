var makeBinarySearchTree = function(value){
  var someInstance = {};
  someInstance['value'] = value;
  someInstance.left = null;
  someInstance.right = null;

  someInstance.insert = function(value) {

    var placeIt = function(value, node) {
      // base case
      // if value is greter than go right
      if ( value > node.value ) {
        // if node.right is null, make a new tree there
        if ( node.right === null ) {
          node.right = makeBinarySearchTree(value);
        } else {
          // if it isn't empty call again
          placeIt(value, node.right);
        }
       // else go left 
       // if node.left is null, make a new tree there
      } else if ( node.left === null ) {
        node.left = makeBinarySearchTree(value);
      } else {
        // if it isn't empty call again
        placeIt(value, node.left);
      }
    }
    return placeIt(value, this);
  }

  someInstance.contains = function(value) {

    // recursive function looking for value
    var hasValue = function(value, node) {
      // base case
      if ( value === node.value ) {
        return true;
      } else {
        if ( value > node.value ) {
          if ( node.right === null ) {
            return false
          } else {
            return hasValue(value, node.right);
          }
        } else {
          if ( node.left === null ) {
            return false;
          } else {
            return hasValue(value, node.left);
          }
        }
      }
    }
    return hasValue(value, this);
  }

  someInstance.depthFirstLog = function (callback) {
    // recursive function looking for value
    var callValue = function(value, node) {
      // base case
      if ( node.value ) {
        callback(node.value);
      }
      if ( node.right ) {
        return callValue(value, node.right);
      }
      if ( node.left ) {
        return callValue(value, node.left);
      }
    }
    return callValue(value, this);
  }
  return someInstance;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
