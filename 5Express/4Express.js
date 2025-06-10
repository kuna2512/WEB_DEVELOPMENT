const express = require("express");
const app = express();
var user = [{
    name:"john",
    kideny:[{
        healthy:false
    },{
        healthy:true
    }]
}]
app.get("/",function(req,res){
    const johnKidney = user[0].kidney;
    console.log(johnKidney);
});
app.post("/",function(req,res){

});
app.put("/",function(req,res){

});
app.delete("/",function(req,res){

});
app.listen(3130);
// min 38:51