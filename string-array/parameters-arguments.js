function addSumNumbers(num1, num2) {
    // const result = num1 + num2;
    // return result;
    let result = 0;
    for (const number of arguments) {
        result = result + number;
    }
    return result;
}

const totalNumber = addSumNumbers(45, 32, 43, 43);
console.log(totalNumber);

// Function of fullName 
function fullName(fName, sName) {
    let totalName = ' ';
    for (const part of arguments) {
        totalName = totalName + part + " "
    }
    return totalName;
}
const fullNames = fullName("snif", "songkat", "bin", "omuk", "songket", "bin", "tumuk", "songkat");
console.log(fullNames);