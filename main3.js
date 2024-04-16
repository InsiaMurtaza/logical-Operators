"use strict";
let myPercentage = 35;
if (myPercentage >= 80 && myPercentage < 100) {
    console.log("your grade is A+");
}
else if (myPercentage >= 70 && myPercentage < 80) {
    console.log("your grade is A");
}
else if (myPercentage >= 60 && myPercentage < 70) {
    console.log("your grade is B");
}
else if (myPercentage >= 50 && myPercentage < 60) {
    console.log("your grade is C");
}
else if (myPercentage > 100) {
    console.log("Invalid Marks");
}
else {
    console.log("your grade is F");
}
