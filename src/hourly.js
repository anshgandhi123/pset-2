const readlineSync = require("readline-sync");

const HourlyWage = parseFloat(readlineSync.question("\nHourly Wage: "), 10);

let Monday = parseFloat(readlineSync.question("\nMonday: "), 10);

let Tuesday = parseFloat(readlineSync.question("Tuesday: "), 10);

let Wednesday = parseFloat(readlineSync.question("Wednesday: "), 10);

let Thursday = parseFloat(readlineSync.question("Thursday: "), 10);

let Friday = parseFloat(readlineSync.question("Friday: "), 10);

let Saturday = parseFloat(readlineSync.question("Saturday: "), 10);

let Sunday = parseFloat(readlineSync.question("Sunday: "), 10);

let a = (Monday+Tuesday+Wednesday+Thursday+Friday+Saturday+Sunday)*HourlyWage

let b = Math.round(100*a) / (100)

let c = b.toLocaleString()
function financial(c) {
  return Number.parseFloat(c).toFixed(2);
}

console.log("\nYou'll make " + "$" + financial(c) + " this week.");
