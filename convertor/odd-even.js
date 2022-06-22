// Even number 
function isEven(number) {
    if (number % 2 == 0) {
        return true
    }
    return false;
}
const myNumber = 1450;
const myNumberIsEven = isEven(myNumber);
console.log(myNumberIsEven);

// odd Number 

function isOdd(number1) {
    if (number1 % 2 != 0) {
        return true
    }
    return false;
}
const firstNumber = 1437;
const thisNumber = isOdd(firstNumber);
console.log(thisNumber);

// Another option is odd number 

function anotherOptionOdd(option) {
    if (option % 2 == 1) {
        return true;
    }
    return false;
}

const herNumberIs = 500;
const thisNumberIsOdd = anotherOptionOdd(herNumberIs)
console.log("This Number is", thisNumberIsOdd)