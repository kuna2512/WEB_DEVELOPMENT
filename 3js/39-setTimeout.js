console.log("hii");
function timeout(){
    console.log("click the button");
}
setTimeout(timeout,10000);
console.log("Welcome to the code zone");

let c = 1;
for(let i=0; i<100000; i++){
    c = c+1;
}
console.log("Expensize operation done " + c)
/*
output :
hii
Welcome to the code zone
Expensize operation done 100001
click the button
*/