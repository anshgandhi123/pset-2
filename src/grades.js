const readlineSync = require("readline-sync");

const conversion1 = 0.15;
const conversion2 = 0.35;
const conversion3 = 0.50;

let homework = parseFloat(readlineSync.question("\nEnter three homework grades.\n"), 10);
let homework1 = parseFloat(readlineSync.question(""), 10);
let homework2 = parseFloat(readlineSync.question(""), 10);

let quiz = parseFloat(readlineSync.question("\nEnter three quiz grades.\n"), 10);
let quiz1 = parseFloat(readlineSync.question(""), 10);
let quiz2 = parseFloat(readlineSync.question(""), 10);

let test = parseFloat(readlineSync.question("\nEnter three test grades.\n"), 10);
let test1 = parseFloat(readlineSync.question(""), 10);
let test2 = parseFloat(readlineSync.question(""), 10);

let c = ((homework + homework1 + homework2) / 3) * (conversion1);
let a = ((quiz + quiz1 + quiz2) / 3) * (conversion2);
let b = ((test + test1 + test2) / 3) * (conversion3);

let d = (a + b + c)

let g = Math.round(100*d) / (100)
let h = g.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )

console.log("\nYour marking period grade is " + h + "%.");
