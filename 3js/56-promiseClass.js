function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
setTimeoutPromisified(5000).then(function (){
    console.log("5 seconds have passed");
});