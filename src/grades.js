const readlineSync = require("readline-sync");

const Conversion1 = 0.15;
const Conversion2 = 0.35;
const Conversion3 = 0.50;

let Homework = parseFloat(readlineSync.question("\nEnter three homework grades.\n"), 10);
let Homework1 = parseFloat(readlineSync.question(""), 10);
let Homework2 = parseFloat(readlineSync.question(""), 10);

let Quiz = parseFloat(readlineSync.question("\nEnter three quiz grades.\n"), 10);
let Quiz1 = parseFloat(readlineSync.question(""), 10);
let Quiz2 = parseFloat(readlineSync.question(""), 10);

let Test = parseFloat(readlineSync.question("\nEnter three test grades.\n"), 10);
let Test1 = parseFloat(readlineSync.question(""), 10);
let Test2 = parseFloat(readlineSync.question(""), 10);

let c = ((Homework + Homework1 + Homework2) / 3) * (Conversion1);
let a = ((Quiz + Quiz1 + Quiz2) / 3) * (Conversion2);
let b = ((Test + Test1 + Test2) / 3) * (Conversion3);

let d = (a + b + c)

let g = Math.round(100*d) / (100)

let h = g.toLocaleString()
function financial(h) {
  return Number.parseFloat(h).toFixed(2);
}

console.log("\nYour marking period grade is " + h + "%.");
