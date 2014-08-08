var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.length = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
}

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
}

stackMethods.pop = function() {
  if ( this.length > 0 ) {
    this.length--;
    var temp = this[this.length];
    delete this[this.length];
  }
  return temp;
}
