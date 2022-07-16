//Destructing of variable and object 

const driver = {
    name: "Mahadi Hasan",
    age: 30,
    salary: 6780,
    address: "Dhaka, Bangladesh",
    road: "2 no Dhaka"

};

const { name, age, salary, address, road } = driver;
console.log(name, age, salary, address);

// destructing of array 

const [x, y, z] = [65, 43, 32, 21, 90];
console.log(x + y);

// optinal channing 
const work = {
    name: "Ahamed Emon",
    address: "Mirpur, Dhaka",
    CEO: {
        name: "Jibon",
        experience: "4 years",
        position: "CEO",
        salary: "13280"
    },
    language: {
        basics: "HTML",
        basicFont: "CSS",
        developer: "JS,",
        frameWork: "React"
    },
};

console.log(work.CEO.name);
console.log(work?.tech?.CEO?.name);
