const numbers = [34, 32, 2, 5, 7, 8, 90, 43, 23];
const bigNumber = numbers.filter(number => number > 40);
const smallNumber = numbers.filter(number => number < 40);
console.log(smallNumber);
console.log(bigNumber);

const products = [
    { name: "Mobile-Phone", color: "red", price: 15000, },
    { name: "TV", color: "yellow", price: 105000, },
    { name: "chosma", color: "red", price: 50, },
    { name: "book", color: "green", price: 150, },
    { name: "laptop", color: "green", price: 25000, }
];
const lowPriceProduct = products.filter(product => product.price < 10000);
console.log(lowPriceProduct);
const redItem = products.find(product => product.color == "red");
console.log(redItem);