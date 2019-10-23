const readlineSync = require("readline-sync")

const Hw = readlineSync.question("\nEnter three homework grades.\n")
const Hw1 = readlineSync.question("")
const Hw2 = readlineSync.question("")

const Quiz = readlineSync.question("\nEnter three quiz grades.\n")
const Quiz1 = readlineSync.question("")
const Quiz2 = readlineSync.question("")

const Test = readlineSync.question("\nEnter three test grades.\n")
const Test1 = readlineSync.question("")
const Test2 = readlineSync.question("")

const Conversion1 = 0.15;
const Conversion2 = 0.35;
const Conversion3 = 0.50;

let c = ((Hw + Hw1 + Hw2) / 3) * (Conversion1);
let a = ((Quiz + Quiz1 + Quiz2) / 3) * (Conversion2);
let b = ((Test + Test1 + Test2) / 3) * (Conversion3);

let d = (a + b + c)

let g = Math.round(100*d) / (100)

let h = g.toLocaleString()

console.log("\nYour marking period grade is " + h + ".");
