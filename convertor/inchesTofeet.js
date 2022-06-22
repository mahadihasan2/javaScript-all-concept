var inches = 120;
var feet = inches / 12;
console.log(feet);


// kelometers to miles

function dadakilometers(miles) {
    var kilometers = miles * 1.60934;
    var mile = kilometers / 12
    return mile;
}

var dadatalk = dadakilometers(50)
console.log(dadatalk);


// inches to cm

function inchesToCentimeters(inches) {
    var cm = inches * 2.54;
    // var inch = cm / 2.54;
    var meter = cm * 0.1;
    return meter;
}

var fatherTalkInches = inchesToCentimeters(60);
console.log(fatherTalkInches);