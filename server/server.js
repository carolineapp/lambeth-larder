const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("./controllers/airtable");

app.use(routes);

app.disabled("x-powered-by");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
