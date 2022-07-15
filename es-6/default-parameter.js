function add(num1, num2 = 12) {
    /*  OPtion - 01
     if (num2 == undefined) {
         num2 = 0;
     } */

    /*   Option - 02
      num2 = num2 || 0; 
      
  */
    const total = num1 + num2;
    return total;
}

// const number = add(13, 45);
const number = add(45, 45);
console.log(number);

function addName(firstName, lastName = "Chowdhury") {
    const result = firstName + " " + lastName;
    return result;
}

const name = addName("Mahadi");
console.log(name);