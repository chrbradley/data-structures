var makeStack = function() {
  var obj = Object.create(stackMethods);

  obj.count = 0;

  obj.storage = {};

  return obj;
};

var stackMethods = {

  size: function() {
    return this.count;
  },
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count) {
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  }
};