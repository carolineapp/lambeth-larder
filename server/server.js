const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("./controllers/airtable");

/*Express Middleware*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.disabled("x-powered-by");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
