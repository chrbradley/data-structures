var Stack = function() {
  this.count = 0;
  this.storage = {}
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count) {
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
};