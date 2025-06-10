const fs = require("fs");
function print(err,data){
    console.log("error is");
    console.log(err);
    console.log("data is");
    console.log(data);
}
fs.readFile("a.txt","utf-8", print);