const readlineSync = require("readline-sync")
const Width = readlineSync.question("\nWidth: ")
const Length = readlineSync.question("Length: ")
const Conversion = 25.4;
let w = Width;
let l = Length;
let c = w*Conversion
let s = Conversion*l
let f = c*s
let g = Math.round(100*f)/(100)
let h = g.toLocaleString()
function financial(h) {
  return Number.parseFloat(h).toFixed(2);
}
console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has an area of " + h + " square millimeter(s).");
