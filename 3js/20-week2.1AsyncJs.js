/*
topic :-
1. i/o tasks
2. callbacks
3. function arguments
4. Async va Sync code
5. Event loops, Callback queues, js
*/
function sum(a,b){
    return a+b;
};
let ans = sum(3,20)
console.log(ans);

// concatination
let con = sum("20",25);
console.log(con);


// parsI
function summ(n){
    let answ =0;
    for(let i; i<n; i++){
        answ = answ+i;
    }
    return answ;
}
let add = summ(5,4,3,6,2);
console.log(summ);