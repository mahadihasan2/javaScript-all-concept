// Largest Number is:
// function largestNumbers(numbers) {
//     let largestNumber = [0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largestNumber) {
//             largestNumber = element;
//         }
//     }
//     return largestNumber;

// }

// const someNumber = largestNumbers([54, 32, 43, 897, 909, 6453])
// console.log("This array largest Number is = ", someNumber);

// Smallest Number Using Function 

function smallestNumber(numbers) {
    // let small = [0];
    let small = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < small) {
            small = element;


        }
    }
    return small;
}

const smallest = smallestNumber([65, 43, 32, 21, 67])
console.log(smallest);