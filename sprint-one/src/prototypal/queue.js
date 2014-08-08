var makeQueue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
}

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
}

queueMethods.dequeue = function() {
  if ( this.length > 0) {
    this.length--;
    var temp = this[0];
    delete this[0]
    for ( var i = 0; i < this.length; i++ ) {
      this[i] = this[i+1];
    }
    return temp;
  }
}
