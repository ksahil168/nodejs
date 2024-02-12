const express = require("express");
const app = express();

//this is middleware which runs before the route

// The code snippet sets up two middleware functions that log messages to the console, and then defines a route handler for the root URL that sends a response with a specific message.

//The data which user sends is in "req" like location, device info,and other things
//code which is send through server is in "res"
// agar control ek baar bhi middleware par gaya to agle middleware ya route par khud se nahi jayega isliye "next ka use krte hai"
app.use(function (req, res, next) {
  console.log("sahil this is middleware 1");
  next();
});

app.use(function (req, res, next) {
  console.log("sahil hei hello kumar middleware 2");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello Kumar Sahil!!! yoyoyohahaha");
});
