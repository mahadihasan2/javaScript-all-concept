// Sorting of digit 
const numbers = [7, 3, 2, 1, 6, 5, 4, 8, 9];
const numbersShort = numbers.sort();
// console.log(numbersShort);

// sorting of String 
const name = ["mahadi", "jobaidul", "rakib", "imran", "abul", "mamun", "tahir"];
const nameStringSort = name.sort();
console.log(nameStringSort);
// Number of Sorting in Array 
const numbersOfArray = [54, 32, 67, 90, 2, 1, 32, 47, 13, 12,];
const numberSorting = numbersOfArray.sort(function (a, b) {
    return a - b;
});
console.log(numberSorting);
// Reverse Array of Element 
const nameOfReverse = name.reverse().sort();
console.log(nameOfReverse);