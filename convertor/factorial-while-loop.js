function getFactorial(number) {
    let factorial = 1;
    let i = 1;

    while (i <= number) {
        factorial = factorial * i;
        i++;
    }

    return factorial
}

const firstFactorialNumber = getFactorial(6);
console.log(firstFactorialNumber);