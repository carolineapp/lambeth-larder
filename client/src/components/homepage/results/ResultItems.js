import React, { Component } from "react";
import { render } from "react-dom";

const ResultItems = ({ ...props }) => {
  const noResult =
    "! No emergency food venues are open in Lambeth now. Try searching for later this week or alternatively call One Lambeth Advice on 0800 254 0298.";

  const d = new Date();
  const day = d.getDay();
  const time = d.getHours();

  const mapTime = {
    1: "Sunday_Open",
    2: "Monday_Open",
    3: "Tuesday_Open",
    4: "Wednesday_Open",
    5: "Thursday_Open",
    6: "Friday_Open",
    7: "Saturday_Open"
  };

  console.log(time);
  //

  // props.result ? console.log(props.result[0].Name) : { noResult };

  // Current time check only checks if current time is before the opening time - if centre is already open now it will show as closed. Need to store time as one piece of data ie. 13.30-17.00 for below to work

  return (
    <ul className="results">
      {props.result ? (
        props.result.map(a => {
          return (
            <li key={a.Name}>
              {a.Name}
              <br />
              {a.Description}
              <br />
              {a.Address_Line_3}
              <br />
              {a[mapTime[day]] !== "Closed" && time < parseInt(a[mapTime[day]])
                ? `Open today from ${a[mapTime[day]]}`
                : "Closed Today"}
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
