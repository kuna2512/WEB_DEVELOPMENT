const fs = require("fs");
const contents = fs.readFileSync("b.txt","utf-8")// asynchronously
console.log(contents);