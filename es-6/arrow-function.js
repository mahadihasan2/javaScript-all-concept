// Normal Function and one way declaration
function add1(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const number1 = add1(15, 17);


// Another way declaration of function 
const add2 = function add2(num1, num2) {
    return num1 + num2;

}
const number2 = add2(15, 17)


// too Another way declaration of function (Anonymous Function)

const add3 = function (num1, num2) {
    return num1 + num2;
}
const number3 = add3(15, 17)


// Arrow function of declaration 

const add4 = (num1, num2) => num1 + num2;
const number4 = add4(15, 17);


console.log(number1, number2, number3, number4);