function getMultiplicationTable(num) {
  var result = '';
  for (let i = 1; i <= 10; i++) {
    console.log(num + ' * ' + i + ' = ' + num*i)
  }
}


/*
function getMultiplicationTable(num) {
  var result = '';
  for (let i = 1; i <= 10; i++) {
    result += num + ' * ' + i + ' = ' + num*i + '\r\n'
  }
  return console.log(result);
}
*/