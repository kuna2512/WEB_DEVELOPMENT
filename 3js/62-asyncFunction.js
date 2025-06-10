function random(resolve){
    setTimeout(resolve,3000);
}
const p = new Promise(random);
function onDone(){
    console.log("file has been cleand");
}
cleanFile("a.txt",onDone)