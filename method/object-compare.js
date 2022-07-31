const first = { a: 1 }
const second = { a: 1 }
if (first === second) {
    console.log("This compare is equal");
} else {
    console.log("This compare is Different");
}

const third = { b: 2 }
const fourth = { b: 2 }
const fith = fourth;
if (fith === fourth) {
    console.log("This compare is equal");

} else {
    console.log("This compare is different")
}

const obj1 = { a: 1, b: 2 }
const obj2 = { a: 1, b: "2" }

/* console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2)); */
/* if (JSON.stringify(obj1) == JSON.stringify(obj2)) {
    console.log("Object are equal")
} */




function compare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (const prop in obj1) {
        if (Object[obj1] !== Object[obj2]) {
            return false
        }
    }

    return true
}

const isEqual = compare(obj1, obj2);
console.log(isEqual);