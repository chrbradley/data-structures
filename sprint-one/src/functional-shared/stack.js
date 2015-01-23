var makeStack = function() {
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  _.extend(obj, stackMethods);
  return obj;


};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;

  },
  pop: function() {
    if(this.count) {
      this.count--;
    }
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;

  },
  size: function() {
    return this.count;
  }
};