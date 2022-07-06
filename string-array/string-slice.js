const anthem = "amar sonar bangla ami tumai valobasi";

// split

const anthemSlit = anthem.split(" ");
// console.log(anthemSlit);
const anthemSlitWithoutA = anthem.split("a");
// console.log(anthemSlitWithoutA);

// Slice
const anthemSlice = anthem.slice(5, 13);
console.log(anthemSlice);

// subStr
const afrin = "ami mahadi ke valobasi";
const afrinTold = afrin.substr(4, 6);
// console.log(afrinTold);

// subString 
const first = "amader gramer nam birgon";
const firstString = first.substring(6, 18);
// console.log(firstString);

// Concatination 
const afrinAkter = "Ami Mahadi ke";
const afrinAkter2 = "Take dekhle amar";
const fullText = afrinAkter.concat(" Valobasi").concat(afrinAkter2).concat(" Mon valo hoiya jai");
// console.log(fullText); 

// Join 
const words1 = ["ahamed", "babul", "cameron", "dula"];
// const allJoins = words1.join('');
// const allJoins = words1.join(' ');
// const allJoins = words1.join(' ');
// const allJoins = words1.join(' ,');
const allJoins = words1.join('www,');
console.log(allJoins);