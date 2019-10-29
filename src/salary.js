const readlineSync = require("readline-sync");

const tax1 = 0.07

const federal = 0.157

const state = 0.0447

const social = 0.062

const medicare = 0.0145

let salary = parseFloat(readlineSync.question("\nAnnual salary: "), 10);

let preTax = salary - (tax1*salary)

let totalTax = (federal + state + social + medicare);

let b = preTax - (totalTax*preTax)

let c = (b/24);

let d = Math.round(100*c) / (100)

let e = d.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )

console.log("\nYour take-home pay each check will be $" + e + ".")
