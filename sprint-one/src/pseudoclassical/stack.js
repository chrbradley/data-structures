var Stack = function() {
  this.length = 0;
};

Stack.prototype.size = function() {
  return this.length;
}

Stack.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
}

Stack.prototype.pop = function() {
  if ( this.length > 0) {
    this.length--;
    var temp = this[this.length];
    delete this[this.length];    
  }
  return temp;
}
