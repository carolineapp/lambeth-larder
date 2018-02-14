require("env2")("./config.env");
const API_KEY = process.env.API_KEY;
const API_BASE = process.env.API_BASE;
const Airtable = require("airtable");

const getAirtableData = (req, res) => {
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
        "Phone",
        "Website",
        "Email",
        "Address_Line_1",
        "Address_Line_2",
        "Address_Line_3",
        "Postcode",
        "Requires_Voucher",
        "Monday_Open",
        "Monday_Close",
        "Tuesday_Open",
        "Tuesday_Close",
        "Wednesday_Open",
        "Wednesday_Close",
        "Thursday_Open",
        "Thursday_Close",
        "Friday_Open",
        "Friday_Close",
        "Saturday_Open",
        "Saturday_Close",
        "Sunday_Open",
        "Sunday_Close",
        "FoodCentre",
        "Postcode",
        "Lat",
        "Long"
      ],
      maxRecords: 100
    })
    .eachPage(function page(records) {
      res.send(records);
    });
};

module.exports = getAirtableData;
