import React, { Component } from "react";
import { render } from "react-dom";

const ResultItems = ({ ...props }) => {
  let flatten = [];
  props.result
    ? props.result.map(a => {
        flatten.push([a.fields.Name, a.fields.Description]);
      })
    : "empty";
  console.log(flatten);
  return (
    <ul className="results">
      {flatten.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default ResultItems;
