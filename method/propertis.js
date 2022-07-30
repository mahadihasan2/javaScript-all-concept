const box = {
    name: "aweiy200",
    sound: "bestSound",
    company: "china",
    price: 2000,
    geranty: "3 Year",
}


// Geatting a all propertis in object
const keys = Object.keys(box);
console.log(keys);

// great all valus in object 
const values = Object.values(box);
console.log(values);

// great a entites of box object 
const entites = Object.entries(box);
console.log(entites);

// delate a entries of object 
// Object.seal(box)
// Object.freeze(box)
box.price = 400
// delete box.sound;

console.log(box);