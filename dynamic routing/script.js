const express = require("express");
const app = express();


app.set("view engine", "ejs");

app.get("/profile", function (req, res) {
  res.send("hello sahil!! put a name after slash/ in url");
});

//Now you can see that every time the name changes we have to write the code again and again
app.get("/shubham", function (req, res) {
  res.send("hello shubham");
});

app.get("/siddharth", function (req, res) {
  res.send("hello siddharth");
});

app.get("/kumar", function (req, res) {
  res.send("hello kumar");
});

//Now whatever we have to access from browser we get it in "req" and : jo bhi colon wali chiz hoti hai use "params" kehte hai uske baad jo username chahie wo daal do hence we get -- req.params.username
app.get("/profile/:username", function (req, res) {
  res.send(`hello ${req.params.username}`);
});
app.listen(3000);
