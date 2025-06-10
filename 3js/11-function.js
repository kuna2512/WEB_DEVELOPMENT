function canVote(age){
    if(age>18){
        return true;
    }
    return false;
}
let age = canVote(2);
console.log(age);
