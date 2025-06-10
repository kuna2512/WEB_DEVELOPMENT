const express = require("express");
const app = express();
const users =
[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json());
app.get("/", function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberOfkidneys=johnkidneys.length;
    let numberOfhealthykidneys=0;
    for(let i=0; i<johnkidneys.length; i++){
        if(johnkidneys[i].healthy){
            numberOfhealthykidneys = numberOfhealthykidneys+1;
        }
    }
    const numberOfunhealthykidneys = numberOfkidneys-numberOfhealthykidneys;
    res.json({
        numberOfkidneys,
        numberOfhealthykidneys,
        numberOfunhealthykidneys
    })
})
app.post("/", function(req,res){
    console.log(req.body); 
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg:"DONE!"
    })
})
app.put("/", function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.listen(3322);