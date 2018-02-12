const NodeGeocoder = require("node-geocoder");
const API_KEY = require("../config.js");

const options = {
  provider: "google",
  Key: API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

const getCoords = pc => {
  geocoder
    .geocode(pc)
    .then(function(res) {
      const latLong = [res[0].latitude, res[0].longitude];
      console.log("latlong :", latLong);
      return latLong;
    })
    .catch(function(err) {
      console.log(err);
    });
};

export default { getCoords, geocoder };
