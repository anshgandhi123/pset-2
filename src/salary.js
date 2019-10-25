const readlineSync = require("readline-sync");

const Tax1 = 0.07

const Federal = 0.157

const State = 0.0447

const Social = 0.062

const Medicare = 0.0145

let Salary = parseFloat(readlineSync.question("\nAnnual salary: "), 10);

let PreTax = Salary - (Tax1*Salary)

let TotalTax = (Federal + State + Social + Medicare);

let b = PreTax - (TotalTax*PreTax)

let c = (b/24);

let d = Math.round(100*c) / (100)

let e = d.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )

console.log("\nYour take-home pay each check will be $" + e + ".")
