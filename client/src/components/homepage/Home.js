import React from "react";
import SearchForm from "./search/SearchForm";
import MapWindow from "./map/MapWindow";
import Navbar from "../Navbar";
import ResultItems from "./results/ResultItems";
import styled from "styled-components";
import LargeMap from "./map/LargeMap";

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
      {!props.fullScreen ? (
        <div>
          <MapWindow result={props.results} lat={props.lat} long={props.long} />
          <button onClick={props.toggleMap}>Open Map</button>
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
      ) : (
        <div>
          <LargeMap
            toggleMap={props.toggleMap}
            result={props.results}
            lat={props.lat}
            long={props.long}
          />
          <button onClick={props.toggleMap}>Minimise</button>
        </div>
      )}
    </div>
  );
};

export default Home;
