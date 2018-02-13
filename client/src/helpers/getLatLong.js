const NodeGeocoder = require("node-geocoder");
const { GOOGLE_API_KEY } = require("../config.js");

const getCoords = postcode => {
  const options = {
    provider: "google",
    Key: GOOGLE_API_KEY,
    formatter: null
  };

  const geocoder = NodeGeocoder(options);

  return geocoder
    .geocode(postcode)
    .then(function(res) {
      const latLong = [res[0].latitude, res[0].longitude];
      return latLong;
    })
    .catch(function(err) {
      console.log(err);
    });
};

module.exports = { getCoords };
