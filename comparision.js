var compare = (5 > 6);
console.log(compare)
compare = (5 < 6);
console.log(compare)

var myLove = 99;
var yourLove = 100;
var loveCompare = (myLove > yourLove);
console.log(loveCompare);
loveCompare = (myLove < yourLove);
console.log(loveCompare);

var number = 505;
var rollNumber = 605;
var compareNumber = (number == rollNumber);
console.log(compareNumber)
number = 605;
compareNumber = (number == rollNumber);
console.log(compareNumber);
number = 700;
rollNumber = 700;
compareNumber = (number != rollNumber);
console.log(compareNumber);
number = 809;
rollNumber = 709;
compareNumber = (number != rollNumber);
console.log(compareNumber);

// compare of && abong || operator 

var name = 'Mahadi';
var lastName = 'Hasan';
var compareName = (name == name && lastName == lastName);
console.log(compareName);
name = 'Afrin';
lastName = 'noon';
compareName = (name == name || lastName == 'Tabassum');
console.log(compareName);