function waited(resolve){
    setTimeout(resolve,3000)
}
function setTimeoutPromisified(){
    return new Promise(waited);
}
function main(){
    console.log("main is called")
}
setTimeoutPromisified().then(main);