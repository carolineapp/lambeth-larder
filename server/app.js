const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const routes = require("./controllers/routes.js");

const PORT = process.env.PORT || 3002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

modules.exports = app;
