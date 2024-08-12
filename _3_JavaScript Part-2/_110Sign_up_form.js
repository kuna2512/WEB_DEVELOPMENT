function show1(){
    var x=document.getElementById("mess1");
    x.style.display="block";
}
function check1() {
    var user1 = document.getElementById("name").value;
    var pupper = document.getElementById("upper1");
    var capital = /[A-Z]/g;
    user1.match(capital) ? pupper.style.display = "none" : pupper.style.display = "block";

    // Hide the message div box after completing all conditions
    var mess1 = document.getElementById("mess1");
    user1.match(capital) ? mess1.style.display = "none" : mess1.style.display = "block";
}
function show2(){
    var x=document.getElementById("mess2");
    x.style.display="block";
}
function check2() {
    var user2 = document.getElementById("name2").value;
    var pupper = document.getElementById("upper2");
    var capital = /[A-Z]/g;
    user2.match(capital) ? pupper.style.display = "none" : pupper.style.display = "block";

    // Hide the message div box after completing all conditions
    var mess1 = document.getElementById("mess2");
    user2.match(capital) ? mess1.style.display = "none" : mess1.style.display = "block";
}
function show3(){
    var x= document.getElementById("mess3");
    x.style.display="block";
}
function check3(){
    var user3= document.getElementById("mobile").value ;
    var numb=document.getElementById("num1");
    var number=/[0-9]/g;
    user3.match(number) ? numb.style.display = "none" : numb.style.display = "block";

    var mes =document.getElementById("mess3");
    user3.match(number) ? mes.style.display="none" : mes.style.display="block"; 
}
function show4(){
    var x=document.getElementById("mess4");
    x.style.display="block";
}
function check4(){
    var user4 = document.getElementById("mobile2").value;
    var num = document.getElementById("num2");
    var number=/[0-9]/g;
    user4.match(number) ? num.style.display = "none" : num.style.display = "block";

    
    var hide=document.getElementById("mess4");
    user4.match(number) ? hide.style.display="none" : hide.style.display="block";
}
function show5(){
    var x=document.getElementById("mess5");
    x.style.display="block";
}
function check5(){
    var user5 = document.getElementById("email").value;
    var emaail = document.getElementById("emaill");
    var elower = document.getElementById("lower1");
    var num = document.getElementById("num3");
    var email = /[@gmail.com]/g;
    var small = /[a-z]/g;
    var number = /[0-9]/g;
    user5.match(email) ? emaail.style.display = "none" : emaail.style.display = "block";
    user5.match(small) ? elower.style.display = "none" : elower.style.display = "block";
    user5.match(number) ? num.style.display = "none" : num.style.display = "block";

    var mes = document.getElementById("mess5");
    user5.match(email) && user5.match(small) && user5.match(number) ? mes.style.display = "none" : mes.style.display = "block";
}
function show6(){
    var x=document.getElementById("mess6");
    x.style.display="block";
}
function check6(){
    var user5 = document.getElementById("user").value;
    var pupper = document.getElementById("upper3");
    var elower = document.getElementById("lower2");
    var num = document.getElementById("num4");
    var capital =/[A-Z]/g;
    var small = /[a-z]/g;
    var number = /[0-9]/g;
    user5.match(capital) ? pupper.style.display = "none" : pupper.style.display = "block";
    user5.match(small) ? elower.style.display = "none" : elower.style.display = "block";
    user5.match(number) ? num.style.display = "none" : num.style.display = "block";

    var mes = document.getElementById("mess6");
    user5.match(capital) && user5.match(small) && user5.match(number) ? mes.style.display = "none" : mes.style.display = "block";
}

function show7(){
    var x=document.getElementById("mess7");
    x.style.display="block";
}
function check7(){
    var user7 = document.getElementById("pwd").value;
    var pupper = document.getElementById("upper4");
    var lower = document.getElementById("lower3");
    var num = document.getElementById("num5");
    var capital = /[A-Z]/g;
    var small = /[a-z]/g;
    var number = /[0-9]/g;

    user7.match(capital) ? pupper.style.display = "none" : pupper.style.display = "block";
    user7.match(small) ? lower.style.display = "none" : lower.style.display = "block";
    user7.match(number) ? num.style.display = "none" : num.style.display = "block";

    var y = document.getElementById("mess7");
    user7.match(capital) && user7.match(small) && user7.match(number) ? y.style.display = "none" : y.style.display = "block"; 
}

