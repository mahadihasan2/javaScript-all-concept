function bringSingara(takaDaw) {
    console.log(takaDaw);

}
bringSingara(490);


function runningStart(meter) {
    console.log('Ajke Ami Hatlam onk', meter);
    console.log('ajke onk hatcen');
    var gonta = 30;
    var masheHatarPrice = meter / gonta;
    return masheHatarPrice;

}


var perKilimeter = 59;
var hatciOnk = runningStart(perKilimeter)
console.log(hatciOnk)