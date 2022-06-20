var book = {
    name: "start with why",
    Price: 560,
    pages: 670,
    writer: "simon snake"
};

var mobile = {
    name: "Real-me 560",
    Price: 17300,
    display: 5.5,
    Storage: "16gb"
};

var man = {
    name: "Mahadi Hasan",
    color: "black",
    weight: "70kg",
    height: 5.5,
    citizen: "Bangladeshi",
    Read: "ISTT-Institute of Science Trade and Technology",
    Department: "CSE"
};

man.name = 'Shariar Hridoy';
console.log(man)

// declare the another way and set the key value
var newName = 'name';
man[newName] = 'Tarikul Islam';
console.log(man);

// another way 

man['name'] = 'shajahan Mia';
console.log(man);
// another way change the institute name
var instituteName = 'Read';
man[instituteName] = 'Govt Bangla College'
console.log(man);

// another way 
man['Read'] = 'govt titumir college';
console.log(man);