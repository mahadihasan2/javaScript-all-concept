function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        // console.log("Please Provide an array of string name")
        return "Please Provide an array of string name";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
};

const friends = ["Hamid", "Mahadi", "Torikul", "Tammana", "TaamjidIslam"];
// const myBigBuddy = megaFriend(friends);
const myBigBuddy = megaFriend(4353);
// console.log(myBigBuddy);

// Another way checked in array of elements 
if (friends.indexOf("Hamid") != -1) {
    console.log("Hamid is exsits");
} else {
    console.log("Hamid does not exsits")
}

// Includes dara o check kora jai 
if (friends.includes("Mahadis")) {
    console.log("Mahadi is Exsits");
} else {
    console.log("Mahadi is not exsits");
}

// ContatiNation 

const first = [3, 4, 5, 6];
const second = [43, 98, 76];
const combaind = first.concat(second);
console.log(combaind);

// conCat of Lover 
const mahadi = "Afrin I Love You";
const afrin = " Mahadi, I Love You Too";
const combaindTaxt = mahadi.concat(afrin);
console.log(combaindTaxt);