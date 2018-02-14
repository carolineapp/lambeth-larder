import React from "react";
import SearchForm from "./search/SearchForm";
import MapWindow from "./map/MapWindow";
import Navbar from "../Navbar";
import ResultItems from "./results/ResultItems";
import styled from "styled-components";

const Home = ({ ...props }) => {
  const Title = styled.div`
    font-size: 20px;
    height: 15vh;
    display: flex;
    align-items: center;
    padding-left: 5vw;
    color: rgba(0, 0, 0, 0.5);
  `;

  return (
    <div>
      <Navbar />
      <Title>Emergency Food</Title>
      <MapWindow result={props.results} lat={props.lat} long={props.long} />
      <SearchForm
        handleClick={props.handleClick}
        handleChange={props.handleChange}
        handleTime={props.handleTime}
        toggleAdviceCentres={props.toggleAdviceCentres}
        checkPostcode={props.checkPostcode}
        postcodeErrorMsg={props.postcodeErrorMsg}
        timeOption={props.timeOption}
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
