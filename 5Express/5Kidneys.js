
const express = require("express");
const app = express();
const users = [{
    name:"John",
    Kidneys:[{
        healthy:false
    }]
}]
app.get("/",function(request,response){
    const johnKidneys = users[0].Kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    response.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})
app.listen(3434);
