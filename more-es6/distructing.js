const office = { name: "Hamid Hasan", address: "Mirpur-13, Dhaka", homeTown: "Narsingdi", id: 43, bodyColor: "yellow", nationality: "Bangladeshi", phone: "01720117175" };
// const name = office.name;
// const address = office.address;
// const id = office.id
// const phone = office.phone;

const { phone, id, address, bodyColor, name } = office

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(name);

// Big object of distructing in javaScript 

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
// const { name, address } = work
const { experience, salary } = work.CEO
const { basics, basicFont, developer, frameWork } = work.language

// console.log(name, address);
console.log(experience, salary);
console.log(basics, basicFont, frameWork);