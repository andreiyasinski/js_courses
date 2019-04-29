function query(collection, select, filter) {
    return arguments[1] ? select(filter(collection)) : collection;
}

function select() {
    var args = [].slice.call(arguments);
    return function (collection) {
      return collection.map(function(x) {
        var result = {}
        args.forEach(function (field) {
          result[field] = x[field]
        })
        return result
      })
    }
}

function filterIn(property, values) {
    return function(collection) {
        return collection.filter(function(item) {
          return values.indexOf(item[property]) > -1
        })
    }
}

module.exports = {
    timeShift: function(date) {
        return {
            inDate: new Date(date),
        
            add: function (value, type) {
                var newDate;
                switch (type) {
                    case 'years':
                        newDate = new Date(this.inDate.setFullYear(this.inDate.getFullYear() + value));
                        break;
                    case 'months':
                        newDate = new Date(this.inDate.setMonth(this.inDate.getMonth() + value));
                        break;
                    case 'days':
                        newDate = new Date(this.inDate.setDate(this.inDate.getDate() + value));
                        break;
                    case 'hours':
                        newDate = new Date(this.inDate.setHours(this.inDate.getHours() + value));
                        break;
                    case 'minutes':
                        newDate = new Date(this.inDate.setMinutes(this.inDate.getMinutes() + value));
                        break;
                }
        
                this.value = newDate.getFullYear() + "-" 
                + ("" + (newDate.getMonth()+1)).padStart(2, '0') + "-" 
                + ("" +  newDate.getDate()).padStart(2, '0') + " " 
                + ("" +  newDate.getHours()).padStart(2, '0') + ":" 
                + ("" + newDate.getMinutes()).padStart(2, '0')
                return this;
            },
        
            subtract: function (value, type) {
                return this.add(-value, type);
            },
        
            value: new Date(date).getFullYear() + "-" 
            + ("" + (new Date(date).getMonth()+1)).padStart(2, '0') + "-" 
            + ("" +  new Date(date).getDate()).padStart(2, '0') + " " 
            + ("" +  new Date(date).getHours()).padStart(2, '0') + ":" 
            + ("" + new Date(date).getMinutes()).padStart(2, '0')
        }
    },
    lib: {
        query: query,
        select: select,
        filterIn: filterIn
    }    
};
