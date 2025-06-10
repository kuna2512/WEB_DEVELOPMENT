// returns an object of the promise class;
function setTimeoutPromisified(ms){
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
    // object of Promise class
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);