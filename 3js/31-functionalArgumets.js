/*
Fucntional Arguments : passing a function to another function as an argument.   

Approach 1
*/
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
let res = sum(29,33);
console.log(res);

let res2 = sub(33,12);
console.log(res2);