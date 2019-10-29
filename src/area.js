const readlineSync = require("readline-sync")
const width = readlineSync.question("\nWidth: ")
const length = readlineSync.question("Length: ")
const conversion = 25.4;
let w = width;
let l = length;
let c = w*conversion
let s = conversion*l
let f = c*s
let g = Math.round(100*f)/(100)
let h = g.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + h + " square millimeter(s).");
