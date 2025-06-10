/*
A Promise in javaScript is an object the eventual completion
(or failure) of an asynchronous operation and its resulting value.


function main(){
}
setTimeout(main, 3000); // callback the main function.
*/

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);

/*

            Promisified version                        callback version
setTimeoutPromisified(3000).then(callback);       setTimeout(callback,3000)
 */