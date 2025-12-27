const express = require("express");
const path = require("path");

const app = express();

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// static folder
app.use(express.static(path.join(__dirname, "public")));

// route
app.get("/", (req, res) => {
  res.render("main");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
