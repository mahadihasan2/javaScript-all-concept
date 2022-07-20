// JavaScript Object Notation 
// JSON 
const user = { id: 23, name: "Himel", job: "teacher" };
const userStringified = JSON.stringify(user);
console.log(userStringified);
console.log(user);

// JSON

const production = {
    name: "MAhadi Hasan",
    job: "WebDeveloper",
    salary: 45000,
    manager: ["web production", "SEO Production", "Graphics Production", "Program production"],
    owner: {
        name: "Aklima Akter",
        company: "production House",
        monthlyIncome: 1200000,

    },
};
const converted = JSON.stringify(production);
const convertedParse = JSON.parse(production);
console.log(converted);
console.log(convertedParse);
console.log(production);