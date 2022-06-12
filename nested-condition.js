var chaPrice = 60;
var coffePrice = 50;
var bookPrice = 150;
var myMoney = 500;

if (chaPrice > myMoney) {
    console.log('ami cha diya biscut khamu!!');

}
else if (coffePrice > myMoney) {
    console.log('Ami barite jabo na!!')
}
else if (bookPrice < myMoney) {
    console.log('ami bari theke chole jabo');
}
else {
    console.log('tumader barite onk bipod');
}

// nested if-else

if (myMoney < chaPrice) {
    if (bookPrice > coffePrice) {
        console.log('ami china jamu and khayadaya korbo na!!')
    }
    else {
        console.log('ami afrin ke valobasi na akhn!!')
    }
}