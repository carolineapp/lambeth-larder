const router = require("express").Router();
const getAirtableData = require("./airtable");

router.get("/airtable", getAirtableData);

module.exports = router;
