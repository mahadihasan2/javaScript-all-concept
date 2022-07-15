const doMath = (num1, num2) => num1 + num2;
const numberIs = doMath(45, 67);
console.log(numberIs);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyNumber = multiply(21, 32, 43);
console.log(multiplyNumber);

const nameNai = () => "Mahadi Hasan";
const getName = nameNai();
console.log(getName);

// MultiLine Arrow Function 

const multiLine = (num1, num2) => {
    const multiPly = num1 * num2;
    const diff = num1 - num2;
    const result = multiPly * diff;
    const addition = multiPly + diff;
    const total = result + addition;
    return total;
}

const getValue = multiLine(12, 5);
console.log(getValue);