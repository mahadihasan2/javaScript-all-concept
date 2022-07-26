
// Undefine VS NULL 
/* 
    1. Variable Value Not Assigned 
    2. Function but didn't Anything 
    3. Just Wrote return didn't return Anything 
    4. parameter is't passed
    5. Property that dose't exist  in  an object  
    6. Accessing array element out of range;

*/

function sumNumber(x, y) {
    const totalNumber = x + y;

}
const number = sumNumber(43, 32);
console.log("this number is = ", number);


// Second Undefined
function add(a, b) {
    const total = a + b;
    if (0 < 7) {
        return;
    };

    return total;
}
const numberOF = add(4, 6);
console.log("This Number is = ", numberOF);

function double(a, b) {
    const multiple = a * 2;
    console.log(b);
    return multiple;
}
double(65);

// Object 
const job = { name: "Mahadi Hasan", age: 23, location: "Mirpur-13", address: "Narsingdi" };
console.log(job.salary);

// Array 
const sixty = [32, 54, 65, 78];
console.log(sixty[6]);
