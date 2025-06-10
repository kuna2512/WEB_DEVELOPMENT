/*
Doing I/O bound tasks in the real world

    What is you were tasked with doing 3 things
    1. Boil some water.
    2. Do some Laundary
    3. send a package via email.

    what you do these?
    1. One by one (Synchronusly)
    2. Context switch between them (concurrently)
    3. Start all 3 together, and wait for them to finish. The first one 
        that finishes gets created to first.

*/


const fs = require("fs");
            //  argument(1,2)   function(3) 
            //  |               |
fs.readFile("a.txt","utf-8", function(err,contents){
    console.log(contents);
});
fs.readFile("b.txt","utf-8", function(err,contents2){
    console.log(contents2);
});
fs.readFile("c.txt","utf-8", function(err, contents3){
    console.log(contents3);
});