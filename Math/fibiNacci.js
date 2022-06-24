// 3th = 2nd + 1st;
// 4th = 3rd + 2nd;
// 5th = 4th + 3rd;
// 6th = 5th + 4th;
// 112th = 111th + 110th;
// nth = [n-1]th + [n-2]th;
// ith = [i-1]th + [i-2]th;

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);

// Using function and fibonacci Series 

function fibonacciSeries(number) {
    const fiboNacci = [0, 1];
    if (typeof (number) != "number") {
        return "This is not a Number , Please Enter the Number";
    }

    if (number < 2) {
        return "This NUmber is Negative , Please enter the Positive Number";
    }
    for (let i = 2; i <= 20; i++) {
        fiboNacci[i] = fiboNacci[i - 1] + fiboNacci[i - 2];

    }
    return fiboNacci;
}

const fiboNacciNUmber = fibonacciSeries(-1);
console.log(fiboNacciNUmber);
