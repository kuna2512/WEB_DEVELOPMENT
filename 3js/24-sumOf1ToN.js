// find the sum from 1 to number.
function sum(n){
    let ans = 0;
    for(let i = 0; i<n; i++){
        ans = ans + i;
    }
    return ans;
}
let ans = sum(100);
console.log(ans);

/*
Syncronous :- any line of code run by a thread one line 
at a time known as syncronous code.
*/  