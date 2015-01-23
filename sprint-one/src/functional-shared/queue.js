var makeQueue = function(){
  var obj = {};
  obj.count = 0;
  obj.storage = {};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    if (this.count){
      this.count--;
      var result = this.storage[0];
      for (var i = 0; i < this.count; i++) {
        this.storage[i] = this.storage[i+1];
      }
      delete this.storage[this.count];
      return result;
    }
  },

  size: function() {
    return this.count;
  }
};