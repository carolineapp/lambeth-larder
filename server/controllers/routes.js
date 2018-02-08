const router = require("express").Router();
const getData = require("./airtable");

// set routes
router.get("/airtable", getData());

module.exports = router;
