const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/routes");
const app = express();

/*Express Middleware*/
app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.disabled("x-powered-by");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen("port", () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
