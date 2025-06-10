/*
Fucntional Arguments : passing a function to another function as an argument.   

Approach 2
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
// there are three argumets here 
// 1st & 2nd is number and third one is aspect as function
function doOperation(a,b, op){
    return op(a,b);
}
console.log(doOperation(1,2, sum));

// 53 minutes.?