// recap and MathOperation 
var ChelatePrice = 390;
var bookPrice = 200;
var sum = ChelatePrice + bookPrice;
console.log(sum);
var Subtraction = ChelatePrice - bookPrice;
console.log(Subtraction);
var MultiplicationPrice = ChelatePrice * bookPrice;
console.log(MultiplicationPrice);
var divisionPrice = ChelatePrice / bookPrice;
console.log(divisionPrice);

// ShortHand Operation 

var price1 = 30;
var price2 = 59;

// sum ShortHand 

// var totalPrice = price1 + price2;
// var price1 = price1 + 4;
// price1 = price1 + 4;
// price1 += 4; 
price1++;
console.log(price1)

// subtraction ShortHand 

// var price1 = price1 - price2;
// price1 = price1 - 1;
// price1 -= 1;
price1--;
console.log(price1);

// Multiplication  ShortHand 

// var price1 = price1 * 3;
// price1 = price1 * 3
price1 *= 3
console.log(price1)

// Division ShortHand 

// var price1 = price1 / price2;
// price1 = price1 / price2 ;
price1 /= 8;
console.log(price1);

// Special Edition 

var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(3);
total = parseFloat(total);
console.log(total);

var firstNumber1 = '0.1';
var secondNumber2 = '0.2'
var totalPrice = parseFloat(firstNumber1 + secondNumber2);
console.log(totalPrice);
