const router = require("express").Router();
const getData = require("./airtable");

router.get("/airtable", (req, res) => {
  getData(res);
});

module.exports = router;
