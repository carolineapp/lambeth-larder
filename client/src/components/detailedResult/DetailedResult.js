import React from "react";

const DetailedResult = ({ match }) => {

    //get details from airtable using match.params.name 
    //populate the div below with the results
  return (
    <div className="detailedResult__container">
      <header>{match.params.name}</header>
      <p>Info about detailed result</p>
    </div>
  );
};

export default DetailedResult;
