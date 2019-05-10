module.exports = Collection;

/**
 * Конструктор коллекции
 */
function Collection() {
  Array.prototype.constructor.apply(this, arguments);
}

Collection.prototype = Object.create(Array.prototype);
Collection.prototype.constructor = Collection;


// Методы коллекции
Collection.prototype.values = function () {
  return Array.from(this);
};
// другие методы
Collection.prototype.count = function () {
  return this.length;
};

Collection.prototype.append = function (value) {
  //value instanceof Collection ? this.concat(value) : this.push(value);
  
  if(value instanceof Collection) {
    value.forEach(function(item) {
      this.push(item)
    }.bind(this))
  } else {
    this.push(value);
  }
};

Collection.prototype.at = function (position) {
  return position === 0 || position > this.length ? null : this[position - 1]
};

Collection.prototype.removeAt = function (position) {
  if(position === 0 || position > this.length) {
    return false;
  } else {
    this.splice(position-1, 1);
    return true;
  }
};


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
  var arg = arguments[0] instanceof Array && arguments.length === 1 ? arguments[0] : [].slice.call(arguments);
  var temp = new Collection();
  arg.forEach(function(item) {
    temp.push(item)
  });
  return temp;
};
