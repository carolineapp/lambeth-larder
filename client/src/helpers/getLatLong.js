const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google"
};

const geocoder = NodeGeocoder(options);

geocoder.geocode("n10 2rr", function(err, res) {
  console.log(res);
});
