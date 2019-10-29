const readlineSync = require("readline-sync")
const width = readlineSync.question("\nWidth: ")
const length = readlineSync.question("Length: ")
let w = width;
let l = length;
let base = width;
let exponent = 2;
let z = Math.pow(base, exponent);
let base2 = length;
let exponent2 = 2;
let e = Math.pow(base2, exponent2);
let f = Math.sqrt(e+z)
let g = Math.round(100*f)/(100)
let h = g.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an diagonal of " + h + " inch(es).");
