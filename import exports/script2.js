var a = 2;
var b = 34;
var c = 56;
// This code snippet exports variables "a" and "b" as an object and variable "c" individually. The commented out line logs the value of variable "b" to the console.

//for exporting one variable
module.exports = c;

//for exporting more than one variable
module.exports = { first: a, second: b };

//console.log(b);
