const readlineSync = require("readline-sync");

const students = parseFloat(readlineSync.question("\nStudents: "));

const teachers = parseFloat(readlineSync.question("Teachers: "))

const capacity = parseFloat(readlineSync.question("Bus capacity: "));

let a = students + teachers

let b = Math.ceil(a/capacity)

let c = (students + teachers)%capacity

console.log("\n" + b + " bus(es) is (are) needed, with " + c + " passenger(s) on the last bus.")
