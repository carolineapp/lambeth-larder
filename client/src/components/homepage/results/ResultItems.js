import React, { Component } from "react";
import { render } from "react-dom";

const ResultItems = ({ ...props }) => {
  const noResult =
    "! No emergency food venues are open in Lambeth now. Try searching for later this week or alternatively call One Lambeth Advice on 0800 254 0298.";

  // props.result ? console.log(props.result[0].Name) : { noResult };
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
