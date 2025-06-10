/*
CPU bound tasks : CPU-boud tasks are operation that are limited
by the speed and power of the cpu. these tasks require significant,
computation and processing power, meaning that the 
performance bottelneck is the CPU itself.

*/
let ans = 0; 
for(let i=1; i<=10000000; i++){
    ans = ans + i;

}
console.log(ans);

/*
I/O bound tasks : I/O-bound tasks are operation thar limited by the
system's input/output capabilities, such as disk I/O, or any other from
of data transfer. These tasks spend most of their time waiting for i/o 
operations to complete.
*/

const fs = require("fs");
const contents = fs.readFileSync("a.txt","utf-8");
console.log(contents);