var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};




var treeMethods = {
  addChild: function(value){
    var newChild = makeTree(value);
    this.children.push(newChild);
  },

  contains: function(target){
    var checkTarget = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.children.length !== 0) {
        for (var i = 0; i < node.children.length; i++) {
          if (checkTarget(node.children[i])) {
            return true;
          }
        }
      }
      return false;
    };
    return checkTarget(this);
  }

};

// var tree = makeTree(1);
// tree.addChild('a');
// tree.addChild('b');
// tree.addChild('c');
// tree.children[0].addChild(2);
// tree.children[0].addChild(4);
// tree.children[0].addChild(6);
// tree.children[2].addChild(3);
// tree.children[2].addChild(5);
// tree.children[2].addChild(7);
/*
 * Complexity: What is the time complexity of the above functions?
 */