

const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.use(express.static('./static files/public'))

app.get("/", function (req, res) {
    res.render("index", {name:"sahil"} );
  });

  app.listen(3000)