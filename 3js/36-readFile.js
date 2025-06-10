const fs = require("fs");
function read(err,data){
    console.log(data);
}
const contents = fs.readFile("a.txt","utf-8",read);
console.log(contents);

const contents2 = fs.readFile("b.txt","utf-8", read);
console.log(contents2);