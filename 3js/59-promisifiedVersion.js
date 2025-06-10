function promiseCallback(resolve){
    setTimeout(resolve,3000)
}
function main(){
    console.log("main is called")
}
promiseCallback(main);