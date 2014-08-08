var makeStack = function() {
  var newStack = {};
  newStack.length = 0;

  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for ( var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length = this.length + 1;
}

stackMethods.pop = function() {
  if ( this.length > 0){
    this.length--;
    var temp = this[this.length];
    delete this[this.length];
    return temp;
  }
}