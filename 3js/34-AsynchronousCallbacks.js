/**
 Asynchromous code, code callbacks
 :- let's look the code to read from a file asychronous.
 here, we pass in a function as an argument. This function is called
 a callback since the funcion gets called back when the file is read.
 */
const fs = require("fs");
function afterFileRead(err,contents){
    console.log(contents);
}
fs.readFile("a.txt","utf-8", afterFileRead);
//            |       |          |
//          string   string     function