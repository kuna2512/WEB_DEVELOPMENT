/*
Try to create a promisified version of setTimeout
fetch
fs.readFile
*/
function promiseCallback(resolve){
    setTimeout(resolve,3000);
}
promiseCallback(function(){
    console.log("hi")
});