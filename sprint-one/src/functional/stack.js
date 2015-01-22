var makeStack = function() {
  var someInstance = {};
  var count = 0;
  var storage = {};

  someInstance.push = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    if (count) {
      count --;
    }
    var result = storage[count];
    delete storage[count];
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};