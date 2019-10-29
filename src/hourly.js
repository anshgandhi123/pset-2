const readlineSync = require("readline-sync");

const hourlyWage = parseFloat(readlineSync.question("\nHourly Wage: "), 10);

let monday = parseFloat(readlineSync.question("\nMonday: "), 10);

let tuesday = parseFloat(readlineSync.question("Tuesday: "), 10);

let wednesday = parseFloat(readlineSync.question("Wednesday: "), 10);

let thursday = parseFloat(readlineSync.question("Thursday: "), 10);

let friday = parseFloat(readlineSync.question("Friday: "), 10);

let saturday = parseFloat(readlineSync.question("Saturday: "), 10);

let sunday = parseFloat(readlineSync.question("Sunday: "), 10);

let a = (monday+tuesday+wednesday+thursday+friday+saturday+sunday)*hourlyWage

let b = Math.round(100*a) / (100)
let c = b.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )

console.log("\nYou'll make " + "$" + c + " this week.");
