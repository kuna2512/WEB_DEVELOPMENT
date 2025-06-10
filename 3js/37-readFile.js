/*
function readFile(filePath, encoding, op){
    // read file
    op("Error","hi there")
}
*/
const fs = require("fs");
function print(err,data){
    console.log(data);
}
fs.readFile("b.txt","utf-8", print)//asynchronously
fs.readFile("c.txt","utf-8", print)//asynchronously
console.log("Done!");
/*
output : 
Done!
Kunal Yadav
Niraj Yadav

*/
// 1:08