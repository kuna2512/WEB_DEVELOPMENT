/*
Objects : An object is javaScript is collection of Key-value pairs,
where each key is a string anbd each value can be any valid JavaSctipt
data Type, including another objecct.

            let user = {
    Key <----- name:"Kunal", -----> value
                age:20 ,
                gender:'male
            }

    output :- { name: 'kunal', age: 20, gender: 'male' }
*/
let user = {
    name:"kunal",
    age:20,
    gender:'male'
}
console.log(user);
console.log(user["age"]);
console.log(user["gender"]);