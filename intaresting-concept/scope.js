
const r = 67; (GLOBAL SCOPE)
function sum(first, second) {
    const result = first + second
    // console.log(r);
    return result;
}

const number = sum(45, 32);
// console.log(first);(lOCAL SCOPE)
console.log(r);