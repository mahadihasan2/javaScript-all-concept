var factorial = 1;
for (i = 1; i <= 3; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// 3! = 3 x 2 x 1
// 4! = 4 x 3 x 2 x 1 x
// 5! = 5 x 4 x 3 x 2 x 1
// 6! = 6 x 5 x 4 x 3 x 2 x 1

// Factorial Using Function 

function factorialNumber(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
        // console.log(fact)
    }
    return fact;
}

const myNumber = 9;
const firstFactorial = factorialNumber(myNumber);
console.log(firstFactorial);