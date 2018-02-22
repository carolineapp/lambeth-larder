const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/routes");
const app = express();
const PORT = process.env.PORT || 3001;

/*Express Middleware*/
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
