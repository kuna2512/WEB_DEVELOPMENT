const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false
      }
    ]
  }
];
app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  });
});

app.post("/", function (req, res) {
  console.log(req.body);
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  });
  res.json({
    msg: "DONE!"
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "All kidneys set to healthy!"
  });
});

app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Unhealthy kidneys removed."
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys"
    });
  }
});
function isThereAtleastOneUnhealthyKidney() {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      return true;
    }
  }
  return false;
}
app.listen(3312, () => {
  console.log("Server is running on port 3312");
});
