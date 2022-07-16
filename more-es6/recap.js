// 01. Let and constant 
const number = [65, 43, 21, 90];
// number = [43, 67.89];
let name = "Mahadi Hasan";
name = "Afrin";
console.log(number);
console.log(name);


// 02. Template String 
const taka = 60;
const name1 = "jibon";
const name2 = "Mahadi Hasan Rimon";
const personalDetailed = `<h3> Hello Bangladesh, i am damming form Dhaka. 
i have some ${taka} and my name is: ${name1} and her name is: ${name2}.`
console.log(personalDetailed);


// 03. default parameter
function addNumber(num1, num2 = 0) {
    const addition = num1 + num2;
    return addition;
};

const total = addNumber(45, 13);
console.log(total);

// 04. spread operator76


const arrayOfNumber = [76, 54, 32, 90, 78];
const notArrayOfNumberIs = (64, 43, 32, 21, 89, 56, 790)
const math = Math.max(...arrayOfNumber);
const maths = Math.max(notArrayOfNumberIs);
// const min = Math.min(notArrayOfNumberIs);

console.log(maths);
// console.log(min);
console.log(math);


// 05. arrow function
const arrowFunction = (num1, num2) => {
    const additions = num1 + num2;
    const subtraction = num1 - num2;
    const multiply = (additions + subtraction) * 5;
    const division = multiply / 9;
    return division;
}

const twoNumberIs = arrowFunction(30, 15);
console.log(twoNumberIs.toFixed(2));