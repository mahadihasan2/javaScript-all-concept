// Loop through of object 

const student = {
    name: "Mahahi Hasan",
    age: 23,
    work: "Web Developer",
    profession: "Teacher",
    salary: 5000,
}

for (const prop in student) {
    console.log(prop, student[prop]);
}

// simple way 
const keys = Object.keys(student);
console.log(keys)



// Array loop of 
for (const prop of keys) {
    console.log(prop, student[prop])
}