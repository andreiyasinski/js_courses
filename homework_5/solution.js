//Подсказка: сюда можно складывать записи адресной книги.
var phoneBook = [];

//Здесь можно объявить переменные и функции, которые понядобятся вам для работы ваших функций

module.exports = {
    getWords: function(sentence){
        return sentence.match(/#\S*/ig).join(' ').replace(/#/g, '').split(' ')
        /*
        var result = [];
        
        result = sentence.split(' ').filter(function(word) {
          return word[0] === '#';
        });
      
        result = result.map(function(element) {
          return element.slice(1);
        });
      
        return result;
        */
    },
    normalizeWords: function(words){
        var arr = [];
        var result;
      
        words.forEach(function(element) {
          if(arr.indexOf(element.toLowerCase()) < 0) {
            arr.push(element.toLowerCase())
          }
        });
      
        result = arr.join(', ')
      
        return result;
    },
    addressBook: function(command){
        var tempArr = command.split(' ');

        if(tempArr[0] === 'SHOW') return phoneBook;

        if(tempArr[0] === 'ADD') {
            var isPersonNew = phoneBook.every(function(person) {
            return person.split(': ')[0] !== tempArr[1]
            })
            if (isPersonNew) {
            phoneBook.push(tempArr[1] + ': ' + tempArr[2].replace( /,/g, ', ' ))
            } else {
            phoneBook = phoneBook.map(function(item) {
                return item.split(': ')[0] === tempArr[1] ? item + ', ' + tempArr[2] : item
            })
            }
            phoneBook.sort();
        }

        if(tempArr[0] === 'REMOVE_PHONE') {
            var isPhoneExist = phoneBook.some(function(person) {
            return person.split(': ')[1].indexOf(tempArr[1]) >= 0;
            })

            if (isPhoneExist) {

            phoneBook = phoneBook.filter(function(item) {
                return !(item.split(': ')[1].indexOf(tempArr[1]) === 0 && item.split(': ')[1].split(', ').length === 1)
            });

            phoneBook = phoneBook.map(function(item) {
                if (item.split(': ')[1].indexOf(tempArr[1]) === 0 && item.split(': ')[1].split(', ').length === 1) {
                return item.replace(tempArr[1], '')
                } 
                return item.split(': ')[1].indexOf(tempArr[1]) == 0 ? item.replace(tempArr[1] + ', ', '') : item.replace(', ' + tempArr[1], '')
            })
            return true;
            }
            return false;
        }
    }
}
