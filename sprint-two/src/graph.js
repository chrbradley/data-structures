var Graph = function(){
  this.nodes = {};
  this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes[newNode] = {};

  if (this.size === 1) {
    var firstNode;
    for (var k in this.nodes) {
      if (k !== newNode) {
        firstNode = k;
      }
    }
    this.addEdge(firstNode, newNode);
  }

  this.size ++;

  if (toNode) {
    this.addEdge(newNode,toNode);
  }
};

Graph.prototype.contains = function(node){
  if (this.nodes[node]) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
  this.size --;
};

Graph.prototype.getEdge = function(fromNode, toNode){

  if (this.nodes[fromNode].connected[toNode]) {
    return true;
  } else {
    return false;
  }

};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.nodes[fromNode].connected) {
    this.nodes[fromNode].connected = {};
  }

  if (!this.nodes[toNode].connected) {
    this.nodes[toNode].connected = {};
  }

  this.nodes[fromNode].connected[toNode] = true;
  this.nodes[toNode].connected[fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].connected[toNode];
  delete this.nodes[toNode].connected[fromNode];

  if (Object.keys(this.nodes[fromNode].connected).length === 0) {
    delete this.nodes[fromNode];
  }

  if (Object.keys(this.nodes[toNode].connected).length === 0) {
    delete this.nodes[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
