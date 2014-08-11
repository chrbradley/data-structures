var Graph = function(){
  this.nodes = {};
  this.length = 0;

  return this.node;
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes[this.length] = {};
  this.nodes[this.length].value = newNode;
  this.nodes[this.length].connections = {};
  if ( this.length === 1) {
    this.nodes[0].connections[1] = true;
    this.nodes[1].connections[0] = true;
  }
  if ( toNode ) {
    var temp;
    for ( var key in this.nodes ) {
      if ( this.nodes[key].value === toNode ) {
        temp = key;
        break;
      }
    }
    this.nodes[this.length].connections[temp] = true;
  }
  this.length++;
};

Graph.prototype.contains = function(node){
  for ( var key in this.nodes ) {
    if ( this.nodes[key].value === node ) {
      return true
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for ( var key in this.nodes ) {
    if ( this.nodes[key].value === node ) {
      delete this.nodes[key];
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // console.log("checking "+fromNode+" "+toNode);
  var tempFrom;
  var tempTo;
  for ( var key in this.nodes ) {
    if ( this.nodes[key].value === fromNode ) {
      // console.log(fromNode+" has nodes key of "+key);
      tempFrom = key;
    }
    if ( this.nodes[key].value === toNode ) {
      // console.log(toNode+" has nodes key of "+key);
      tempTo = key;
    }
  }
  if ( this.nodes[tempFrom].connections[tempTo] ) {
    // console.log(fromNode+" is connected to "+toNode);
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var temp;
  for ( var key in this.nodes ) {
    if ( this.nodes[key].value === fromNode ) {
      temp = key;
      break;
    }
  }

  for ( var newKey in this.nodes ) {
    if ( this.nodes[newKey].value === toNode ) {
      this.nodes[newKey].connections[temp] = true;
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var tempFrom;
  var tempTo;
  for ( var key in this.nodes ) {
    if ( this.nodes[key].value === fromNode ) {
      tempFrom = key;
    }
    if ( this.nodes[key].value === toNode ) {
      tempTo = key;
    }
  }
  delete this.nodes[tempFrom].connections[tempTo];
  delete this.nodes[tempTo].connections[tempFrom];

  for ( var node in this.nodes ) {
    console.log(this.nodes[node]);
    console.log(Object.keys(this.nodes[node].connections).length);
     if ( Object.keys(this.nodes[node].connections).length === 0 ) {
      console.log("I lost my keys!!!");
      delete this.nodes[node];
     }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
