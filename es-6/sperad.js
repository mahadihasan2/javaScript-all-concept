const numbers = [54, 32, 21, 87, 90];
// console.log(numbers);
const math = Math.max(54, 32, 21, 78, 90, 55);
// console.log(math);
const mathInArray = Math.max(...numbers);
console.log(mathInArray);

// Another way 
const numbers2 = [120, ...numbers, 70];
numbers.push(44);
numbers.push(60);
console.log(numbers)
console.log(numbers2);