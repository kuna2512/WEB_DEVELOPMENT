let arr = ["kunal",23,{
    name:'priya',
    age:18,
    states:['delhi','punjab','haryana',{
        country:'india',
        state:'bihar'
    }
    ] // key --> array --> and array has another object  
}
]; // arry --> and 3rd key is object
console.log(arr[2]);
console.log(arr[2].states);
console.log(arr[2].states[2]);
console.log(arr[2].states[3]);
console.log(arr[2].states[3].state);
console.log(arr[2].name);
console.log(arr[2].age);
