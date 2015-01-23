var makeQueue = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if (count) {
      count--;
      var result = storage[0];
      for (var i = 0; i < count; i++) {
        storage[i] = storage[i+1];
      }
      delete storage[count];
      return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};