var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count) {
    this.count--;
    var result = this.storage[0];
    for ( var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.count];
    return result;
  }
};