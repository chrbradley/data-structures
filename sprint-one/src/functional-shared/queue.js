var makeQueue = function(){
  var newQueue = {};
  newQueue.length = 0;

  extend(newQueue, queueMethods);

  return newQueue;
 };

var extend = function(to, from) {
  for ( var key in from ){
    to[key] = from[key];
  }
 }

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
}

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
}

queueMethods.dequeue = function() {
  if ( this.length > 0){
    this.length--;
    var temp = this[0];
    delete this[0];
    for ( var i = 0; i < this.length; i++ ) {
      this[i] = this[i+1];
    }
  }
  return temp;
}