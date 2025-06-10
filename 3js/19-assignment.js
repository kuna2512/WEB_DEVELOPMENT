/*
Ques : Create a function that takes an array of objects an input,
and returns the users whose age>18 and are male.
 */

const users = [
    {
        name:'kunal',
        age:23,
        gender:'male'
    },
    {
        name:'anshu',
        age:18,
        gender:'female'
    },
    {
        name:'niraj',
        age:19,
        gender:'male'
    },
    {
        name:'doctor',
        age:18,
        gender:'female'
    }
]
function solve (arr){
    // initalise a new array, push to a new array
    let arr2=[];
    // you can use the filter fuction inside an array.
    for(let i=0; i<arr.length; i++){
        if(arr[i].gender === 'male' && arr[i].age>18){
            console.log("ushing array" + i);
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
const ans = solve(users);
console.log(ans);  
