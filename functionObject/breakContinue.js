var i = 0;
while (i < 30) {
    console.log(i)
    if (i == 16) {
        break;
    }
    i++;
}

// for loop 
for (i = 1; i < 40; i++) {
    console.log(i)
    if (i == 16) {
        break;
    }

}

// Array 
var numbers = [55, 43, 32, 21, 89, 404, 230, 406, 212];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 230) {
        break;
    }
    console.log(number)
}