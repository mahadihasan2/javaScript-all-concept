function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + " " + 'this year is leap year');
    } else {
        console.log(year + " " + 'this year is not leap year');
    }
}
const thisYear = 2021;
const myLeapYear = checkLeapYear(thisYear);
// console.log(myLeapYear);