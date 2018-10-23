var friendsData = require("../data/friends");
const express = require("express")
const app = express();


module.exports = function (app) {
  
  app.post("/api/friends", function (req, res) {
      friendsData.push(req.body);
      res.json(true);
  });
  
  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });
  
  }