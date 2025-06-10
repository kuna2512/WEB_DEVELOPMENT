function greet(user){
    console.log("hi " + user.name + " your age is " + 21);
}
let user  = {
    name:"radhe",
    age:21,
    gender:"female"
}
greet(user);

// or 
function info(user1){
    console.log("name " +user1.name+". her age is "+user1.age+". she is a "+user1.gender);

}
let user1 = {
    name :"anshu",
    age:18,
    gender:'female'
}
info(user1);


// check the index
let arr = ["kuanl",30,'false'];
console.log(arr[2]);

