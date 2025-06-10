function random(resolve){
    resolve();
}
let p = new Promise(random);
console.log(p);
function callback(){
    console.log("promise succeded");
}
p.then(callback);