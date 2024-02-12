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
