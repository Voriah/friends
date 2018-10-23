const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.listen(3000)
