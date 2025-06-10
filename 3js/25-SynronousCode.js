/*
Syncronous code is executed line by line, in the order
it's written. each operation waits for the previous on to 
complete before moving no to the next one.
*/
function sum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;

    }
    return ans;
}
let ans = sum(10);
console.log(ans);
let ans2 = sum(100);
console.log(ans2);
let ans3 = sum(1000);
console.log(ans3);
let ans4 = sum(10000);
console.log(ans4);
