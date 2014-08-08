var Queue = function() {
  this.length = 0;
};

Queue.prototype.size = function() {
  return this.length;
}

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
}

Queue.prototype.dequeue = function() {
  if ( this.length > 0) {
    this.length--;
    var temp = this[0];
    delete this[0]
    for ( var i = 0; i < this.length; i++ ) {
      this[i] = this[i+1];
    }
  }
  return temp;
}
