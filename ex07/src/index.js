const person = require('./nameFunctions.js');

var str = person.firstName("john");
var str2 = person.lastName("DOE");

console.log(str + ' ' + str2);