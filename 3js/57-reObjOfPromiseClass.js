function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function afterDone(){
    console.log("5 seconds have passed");
}
let p = setTimeoutPromisified(5000); // object of the Promise class.
console.log(p);
// 1:10 hours
// 2.2