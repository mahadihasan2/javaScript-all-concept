var firstNumber = (65, 54, 342, 54, 98, 60);
var maxNumber = Math.max(657, 353);
console.log(maxNumber)

// condition using  two variable
var kalam = 760;
var imran = 950;
if (kalam > imran) {
    console.log("Kalam is Bigger");

} else {
    console.log("Imran is Bigger");
}

// condition using three variable 

var primeMinister = 320;
var dokandar = 650;
var army = 740;
if (primeMinister > dokandar && primeMinister > army) {
    console.log("Priminister is Bigger");
} else if (dokandar > primeMinister && dokandar > army) {
    console.log("DOkandar is Bigger");
} else {
    console.log("Army is Bigger");
}

// function using 

function maxNumbers(num1, num2) {

    if (num1 > num2) {
        return num1
    } else {
        return num2;
    }

}

// three input and using function 

function findLargestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// Three input and find the smallest number 
function smallestNumber(num1, num2, num3, num4) {
    if (num1 < num2 && num1 < num3 && num1 < num4) {
        return num1;
    } else if (num2 < num1 && num2 < num3 && num2 < num4) {
        return num2;
    } else if (num3 < num1 && num3 < num2 && num3 < num4) {
        return num3;
    } else {
        return num4;
    }
}


const largestNumbers = findLargestNumber(546, 657, 543);
console.log("This is LargestNumber is = ", largestNumbers);

const largestNumber = maxNumbers(896, 435);
console.log("this is the largest number is =", largestNumber);

// call the smallest number 
const smallestNumbers = smallestNumber(645, 879, 432, 664);
console.log("This is smallestNumber is =", smallestNumbers);