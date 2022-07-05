const products = [
    "laptop is very Useful product",
    "Laptop to the our part of life",
    "Namaj is the best way to haven",
    "Health is very Welath",
    "Laptop niya tora barite ja",
    "tumi laptop diya pani kha"
]

const searching = "Laptop";
const outPut = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        outPut.push(product)
    }
}

// console.log(outPut) 

const anyProduct = [
    "lenevo laptop is the small budget",
    "lenevo xl laptop is the most popular",
    "This the sml laptop in the market avillable",
    "our laptop is gingi lam to market",
    "lenevo sm to short laptop",
    "this is the lenevo market"
]

const input = "lenevo";
const inputPush = [];
for (const someProduct of anyProduct) {
    if (someProduct.toLowerCase().startsWith(input.toLowerCase())) {
        inputPush.push(someProduct);
    }
}

console.log(inputPush)