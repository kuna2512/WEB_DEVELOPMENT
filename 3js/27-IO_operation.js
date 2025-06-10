/*
if here use not use "utf-8" then, we get output as 
ascii value.
output : <Buffer 50 72 69 79 61 6e 73 68 75 20>
 */

let fs = require("fs");
const data = fs.readFileSync("a.txt");
console.log(data);