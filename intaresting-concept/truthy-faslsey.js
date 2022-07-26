
// Truthy 
/* 
  1. True 
  2. Any positive and negative number is true  (withOut 0)
  3. Any String is truthy with white Space 
  4. Array is truthy (empty or value )
  5. object is truthy(EMpty or value)


*/


//False 
/* 
 1. False 
 2. 0
 3. Empty String is falsy 
 4. undefine
 5. NUll 
 6. NaN


*/

let x = null;
if (x) {
    console.log("This is the truthy");
} else {
    console.log("This is the falsy");
}


const y = " ";
if (y) {
    console.log("This is the truthy");
} else {
    console.log("This is the falsy");
}
const z = "Mahadi Hasan ";
console.log(parseInt("this is the value of z", z));
/* if (y) {
    console.log("This is the truthy");
} else {
    console.log("This is the falsy");
} */