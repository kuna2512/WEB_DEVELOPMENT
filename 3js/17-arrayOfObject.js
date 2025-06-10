const users = [{
        name:"kunal",
        age:21,
    },
    {
        name:"anshu",
        age:18
    }
]
console.log(users[0]); // for printing index 0 all elements.
console.log(users[0].age); // for printing only age

for(let i=0; i<users.length; i++){
    console.log(users[i]);
}

// one another way to define arry of object.
let val = ["anshu",18, {
    name:'anshu',
    age:18
}];
console.log(val);


// or 
let arr = ['Priyanshu',20,{
    name:"anshu",
    age:19
},{
    name:'piyu',
    age:25
}];
const val1 = arr[2];
const val2 = arr[3];
console.log(val1); // it print the 2 index
console.log(val2); // it print the 3 index
const val3 = {
    name:'kunal',
    age:23
}
console.log(val3)


