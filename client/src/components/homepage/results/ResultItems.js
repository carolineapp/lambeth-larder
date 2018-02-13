import React, { Component } from "react";
import { render } from "react-dom";
const geolib = require("geolib");

const ResultItems = ({ ...props }) => {
  const noResult =
    "! No emergency food venues are open in Lambeth now. Try searching for later this week or alternatively call One Lambeth Advice on 0800 254 0298.";

  const distanceFinder = (arr, lat, long) => {
    const latA = parseFloat(arr.Lat);
    const longA = parseFloat(arr.Long);
    const latB = parseFloat(lat);
    const longB = parseFloat(long);
    const distance =
      geolib.getDistance(
        { latitude: latA, longitude: longA },
        { latitude: latB, longitude: longB }
      ) /
        1000 +
      "km";
    return distance;
  };

  // props.result ? console.log(props.result[0].Name) : { noResult };
  return (
    <ul className="results">
      {props.result ? (
        props.result.map(a => {
          return (
            <li key={a.Name + a.Description}>
              {a.Name}
              <br />
              {a.Description}
              <br />
              {a.Address_Line_3}
              <br />
              {props.lat ? (
                <span>Distance:{distanceFinder(a, props.lat, props.long)}</span>
              ) : (
                console.log("no result")
              )}
            </li>
          );
        })
      ) : (
        <div>{noResult}</div>
      )}
    </ul>
  );
};

export default ResultItems;
