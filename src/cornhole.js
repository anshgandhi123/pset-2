const readlineSync = require("readline-sync");

const Length = 48
const Width = 24
const Diameter = 6

let area = Math.pow((Diameter/2), 2) * Math.PI
let box_area = ((Length*Width) - area)

let cornhole = Math.round(100*box_area) / (100)

let cornholes = cornhole.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )

console.log("\nThe surface area of a standard Cornhole board is " + cornholes + " square inch(es).")
