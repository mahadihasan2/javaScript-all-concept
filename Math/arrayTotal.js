const numbers = [65, 45, 32, 21];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    console.log(sum)
}

// ArrayTotal using function 
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }

    return sum;
}

const totalArrayResult = arrayTotal([54, 65, 543, 32]);
console.log(totalArrayResult);