
// This Number is positive or negative ===> this number is positive
const myNumber = -45;
const outPut = Math.abs(myNumber)
console.log("This Number is positive = ", outPut);

// Ceil math-operation

const thisNumber = 6.7890;
const calculateNumber = Math.ceil(thisNumber);
console.log(calculateNumber);

// Floor operation in JavaScript 

const numberIs = 7.8703;
const myNumberIs = Math.floor(numberIs);
console.log("This Number is floor = ", myNumberIs);

// Round is using Math Operation 

const aNumber = 9.40392;
const myNumberHere = Math.round(aNumber);
console.log("This NUmber is Round = ", myNumberHere);

// random Number 

const randomNumber = Math.random();
console.log("this is random Number = ", randomNumber)

// using Loop 

for (let i = 0; i <= 20; i++) {
    var randomNumbers = Math.random();
    var randomNumbers = Math.floor(randomNumbers);
    console.log("this number is random = ", randomNumbers);
}
