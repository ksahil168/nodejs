//routing - GET POST PUSH PATCH DELETE


//deleting nodemon module to avoid uploading of 1k plus files to github, u can install npm i expressthen the code will work

const express = require("express");
const app = express();


app.use(function (req, res, next) {
    console.log("sahil hei hello kumar middleware 1");
    next();
  });

app.use(function (req, res, next) {
    console.log("sahil hei hello kumar middleware 2");
    next();
  });

app.get("/", function (req, res) {
  res.send("Hello Kumar Sahil!!! yoyoyohahaha");
});

app.get("/kumar", function (req, res) {
  res.send("because when we put kumar after slash/ this happens");
});

app.listen(3000);
