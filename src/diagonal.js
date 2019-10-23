const readlineSync = require("readline-sync")
const Width = readlineSync.question("\nWidth: ")
const Length = readlineSync.question("Length: ")
let w = Width;
let l = Length;
let base = Width;
let exponent = 2;
let z = Math.pow(base, exponent);
let base2 = Length;
let exponent2 = 2;
let e = Math.pow(base2, exponent2);
let f = Math.sqrt(e+z)
let g = Math.round(100*f)/(100)
let h = g.toLocaleString()
function financial(h) {
  return Number.parseFloat(h).toFixed(2);
}
console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has an diagonal of " + financial(h) + " inch(es).");
