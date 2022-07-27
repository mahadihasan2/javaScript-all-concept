function call(name) {
    // console.log(name)
}

const name = ["Hakim", "Abul", "Kalam"]
// call("Tom Hank");
const muObj = {
    name: "Mahadi", job: "web developer"
}
call(muObj);

// CallBack Function 
function welcomeMeassege(name, greetHandler) {
    // console.log(greetHandler)
    greetHandler(name)
}

function greetMorning(name) {
    // console.log(name);
    console.log("Good Morning", name)
}
/* function greetMorning(name) {
    // console.log(name);
    console.log("Good Morning", name)
} */

welcomeMeassege("Mahadi Hasan", greetMorning)
welcomeMeassege("Shakib Khan", greetMorning)