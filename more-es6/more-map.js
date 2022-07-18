const names = ["MAhadi", "Hamid", "Imran", "Sohel", "Khan"];
const nLength = names.map(n => n.length);

console.log(nLength);


const products = [
    { name: "book", price: 600, color: "yellow", page: 4000 },
    { name: "water pot", price: 1000, color: "green", quantity: "10kg" },
    { name: "book", price: 600, color: "yellow", page: 4000 },
    { name: "book", price: 600, color: "yellow", page: 4000 },
];

products.map(product => console.log(product));
const productName = products.map(p => p.name);
console.log(productName);
const productPrice = products.map(pp => pp.price);
console.log(productPrice);

// ForEach in the array function 
products.forEach(product => console.log(product));