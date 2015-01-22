var makeQueue = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function(){
    if (count){
      count -=1 ;
    }
    var result = storage[0];
    for (var i = 0; i < count; i++) {
      storage[i] = storage[i+1];
    }
    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
