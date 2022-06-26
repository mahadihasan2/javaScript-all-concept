// const click = document.addEventListener('click-here');
function makeclickRed() {
    document.body.style.backgroundColor = 'red';
}


const blueButton = document.getElementById('makeBlueColor');
blueButton.onclick = makeBlueColor;

function makeBlueColor() {
    document.body.style.backgroundColor = 'blue'
}

const greenColor = document.getElementById('makeGreenColor')
greenColor.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// Using JavaScript AddEventListener :
const goldenButton = document.getElementById('makeGoldenRod')
goldenButton.addEventListener('click', goldenButtonColor)

function goldenButtonColor() {
    document.body.style.backgroundColor = "goldenrod";

}

// using another way 
const hotPink = document.getElementById('hotPink');
hotPink.addEventListener("click", function () {
    document.body.style.backgroundColor = 'hotpink'
})

const lightBlue = document.getElementById("Light-Blue").addEventListener("click", function () {
    document.body.style.backgroundColor = 'lightblue'
})