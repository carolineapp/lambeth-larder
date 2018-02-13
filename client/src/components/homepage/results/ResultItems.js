import React, { Component } from "react";
import { render } from "react-dom";
const geolib = require("geolib");

const ResultItems = ({ ...props }) => {
  const noResult =
    "! No emergency food venues are open in Lambeth now. Try searching for later this week or alternatively call One Lambeth Advice on 0800 254 0298.";

  const d = new Date();
  const day = d.getDay(); // returns the current day as a value between 0-6 where Sunday = 0
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const time = `${hours}:${minutes}`;

  // mapTime object gives the current day from getDay as the key and returns the corresponding value. ie. today is Tuesday which = 2 so mapTime[2] returns a.Tuesday_Open which gives either "Closed" or it's opening time.

  //The closing time is found by getting the day+7 ie. 2: Tuesday_Open, 9: Tuesday_Close

  const mapTime = {
    0: "Sunday_Open",
    1: "Monday_Open",
    2: "Tuesday_Open",
    3: "Wednesday_Open",
    4: "Thursday_Open",
    5: "Friday_Open",
    6: "Saturday_Open",
    7: "Sunday_Close",
    8: "Monday_Close",
    9: "Tuesday_Close",
    10: "Wednesday_Close",
    11: "Thursday_Close",
    12: "Friday_Close",
    13: "Saturday_Close"
  };

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
              {a[mapTime[day]] !== "Closed" && time < a[mapTime[day + 7]]
                ? `Closes today at ${a[mapTime[day + 7]]}`
                : "Closed Today"}
              <br />
              {props.lat ? (
                <span>Distance:{distanceFinder(a, props.lat, props.long)}</span>
              ) : (
                console.log("no result")
              )}
              <br />
              <span>Status:{props.timeOption}</span>
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
