﻿var express = require("express");
var app = express();

app.use(express.static("assets"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/logform", function(req, res) {
  res.render("logform");
});

app.get("/content", function(req, res) {
  res.render("content");
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send("Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!");
});