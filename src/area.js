const readlineSync = require("readline-sync")
const Width = readlineSync.question("Width:")
const Length = readlineSync.question("Length:")
let w = Width;
let l = Length;
let c = w*25.4
let s = 25.4*l
let f = c*s

console.log("A(n)" + Width + "-by-" + Length + "-inch sheet of paper has an area of " + f + " square millimeter(s).");
