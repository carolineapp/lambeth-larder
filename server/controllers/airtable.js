require("env2")("./config.env");
const API_KEY = process.env.API_KEY;
const API_BASE = process.env.API_BASE;
const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: API_KEY
});
const base = Airtable.base(API_BASE);

base("Times and Venues")
  .select({
    fields: [
      "Name",
      "Description",
      "Address Line 1",
      "Address Line 2",
      "Address Line 3",
      "Postcode",
      "Requires Voucher",
      "Monday Open",
      "Monday Close",
      "Tuesday Open",
      "Tuesday Close",
      "Wednesday Open",
      "Wednesday Close",
      "Thursday Open",
      "Thursday Close",
      "Friday Open",
      "Friday Close",
      "Saturday Open",
      "Saturday Close",
      "Sunday Open",
      "Sunday Close"
    ],
    maxRecords: 100,
    view: "Grid view"
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function(record) {
        console.log(record);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
