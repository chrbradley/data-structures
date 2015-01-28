var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[hash];

  // make a new bucket if there isn't one at that hash index yet
  if (!bucket) {
    this._storage[hash] = [];
    bucket = this._storage[hash];
  }

  var keyExists = false;
  // check to see if that key has been entered yet and
  // update value if necessary
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      keyExists = true;
      bucket[i][1] = value;
      this._count++;
    }
  }

  // add key value pair if key is new
  if (!keyExists) {
    bucket.push([key, value]);
    this._count++;
  }

  // resize if necessary
  if (this._count > this._limit * 0.75) {
    console.dir(this._count);
    this._resize(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[hash];

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[hash];

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === key) {
      bucket.splice(i);
      this._count--;
    }
  }

  if (this._count < this._limit * 0.25) {
    this._resize(this._limit * 0.5);
  }

};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  console.dir(oldStorage);
  this._limit = newLimit;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;


  for (var index in oldStorage) {
    if (Array.isArray(oldStorage[index])) {
      var bucket = oldStorage[index];
      for (var i = 0; i < bucket.length; i ++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  }

  console.dir(this._storage);

}





/*
 * Complexity: What is the time complexity of the above functions?
 */
