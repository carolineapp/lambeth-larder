const geolib = require("geolib");

const distanceFinder = (state, currentPostcode) => {
  const latA = lat_long.split(",")[0];
  const longA = lat_long.split(",")[1];

  const latB = state.Lat;
  const longB = state.Long;

  const distance =
    geolib.getDistance(
      { latitude: latA, longitude: longA },
      { latitude: latB, longitude: longB }
    ) /
      1000 +
    "km";

  return distance;
};

module.exports = state;
