var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var obj = {};
  var array = [];
  obj[key] = value;
  if ( !this._storage[hash] ) {
    this._storage[hash] = array;
  }
  this._storage[hash].push(obj);
};

HashTable.prototype.retrieve = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  for ( var i = 0; i < this._storage[hash].length; i++ ) {
    if ( this._storage[hash][i][key] ) {
      return this._storage[hash][i][key];
    }
  }
};

HashTable.prototype.remove = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  for ( var i = 0; i < this._storage[hash].length; i++ ){
    if ( this._storage[hash][i][key] ) {
      this._storage[hash][i][key] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
