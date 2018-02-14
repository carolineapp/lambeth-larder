import React from "react";
import SearchForm from "./search/SearchForm";
import MapWindow from "./map/MapWindow";
import Navbar from "../Navbar";
import ResultItems from "./results/ResultItems";
import styled from "styled-components";

const Home = ({ ...props }) => {
  const Title = styled.h2`
    font-size: 20px;
    padding-left: 12vw;
    color: rgba(0, 0, 0, 0.5);
  `;

  return (
    <div>
      <Navbar />
      <Title>Emergency Food</Title>
      <MapWindow result={props.results} />
      <SearchForm 
        // getLocation={props.getLocation}
        handleClick={props.handleClick}
        handleChange={props.handleChange}
        handleTime={props.handleTime}
        toggleAdviceCentres={props.toggleAdviceCentres}
        checkPostcode={props.checkPostcode}
      />
      <ResultItems
        result={props.results}
        lat={props.lat}
        long={props.long}
        timeOption={props.timeOption}
      />
    </div>
  );
};

export default Home;
