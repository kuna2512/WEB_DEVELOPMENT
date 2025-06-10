fs.on('button', 'click', function(){
    setTimeout(function timer(){
        console.log("button");
    }, 20000);
});
console.log("hii");
setTimeout(function timeout(){
    console.log("button2");
}, 50000);
console.log("welcome");
