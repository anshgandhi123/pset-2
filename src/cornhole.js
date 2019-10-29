const readlineSync = require("readline-sync");

const length = 48
const width = 24
const diameter = 6

let area = Math.pow((diameter/2), 2) * Math.PI
let box_area = ((length*width) - area)

let cornhole = Math.round(100*box_area) / (100)

let cornholes = cornhole.toLocaleString( "en", {minimumFractionDigits:2, maximumFractionDigits:2} )

console.log("\nThe surface area of a standard Cornhole board is " + cornholes + " square inch(es).")
