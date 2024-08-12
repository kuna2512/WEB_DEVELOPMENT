function show() {
    var x = document.getElementById("message");
    x.style.display = "block";
    x.style.color = "red";
}

function check() {
    var user = document.getElementById("password").value;
    var pupper = document.getElementById("upper");
    var plower = document.getElementById("lower");
    var Pnumber = document.getElementById("num");
    var capital = /[A-Z]/g;
    var small = /[a-z]/g;
    var number = /[0-9]/g;
    
    user.match(capital) ? pupper.style.display = "none" : pupper.style.display = "block";
    user.match(small) ? plower.style.display = "none" : plower.style.display = "block";
    user.match(number) ? Pnumber.style.display = "none" : Pnumber.style.display = "block";

    // Hide the message div box after completing all conditions
    var mess = document.getElementById("message");
    user.match(capital) && user.match(small) && user.match(number) ? mess.style.display = "none" : mess.style.display = "block";

    // Show the fa fa-icon after completing all conditions
    var fafa = document.getElementById("icon");
    user.match(capital) && user.match(small) && user.match(number) ? fafa.style.display = "block" : fafa.style.display = "none";
}
