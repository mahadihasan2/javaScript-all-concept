// slice of an Array
const numbersOfArray = [65, 43, 32, 2, 1, 90, 31, 5, 6, 7, 8, 9];
const numbersOfArraySlice = numbersOfArray.slice(3, 8);
console.log(numbersOfArraySlice);
console.log(numbersOfArray);

// Splice of an Array 
const numbersOfArrays = [76, 43, 32, 21, 90, 65, 40, 4, 89, 2];
const numbersOfArraySpliced = numbersOfArrays.splice(3, 9);
console.log(numbersOfArraySpliced);
console.log(numbersOfArrays);

// Spliced an enject of an array in the element
const numbers = [65, 43, 42, 9, 0, 1, 4, 3, 2,];
const numbersSpliced = numbers.splice(3, 6, 54, 90, 60);
console.log(numbersSpliced);
console.log(numbers);