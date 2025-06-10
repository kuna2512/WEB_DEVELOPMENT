/*
calculate the sum ofnumber 0 to n
*/
function calSum(n){
    let ans =0;
    for(let i=1; i<=n; i++){
        ans = ans+i;
    }
    return ans;
}
let ans = calSum(10);
console.log(ans);