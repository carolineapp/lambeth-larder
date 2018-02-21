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

  const Span = styled.p`
   font-size: 8px;
   text-align: right;
   padding-right: 2%;
   margin: 0%;

  `

  const MinimiseMap = styled.button`
    
  `

  const MaximiseMap = styled.button`
   position: absolute;
    background: #e71242;
    border: none;
    color: white;
    display: block;
    margin-top: -3%;
    padding-right: 3%;
    height: 1.7rem;
    font-size: 1rem;
   
  `

  return (
    <div>
      <Navbar />
      <Title>Emergency Food</Title>
      {!props.fullScreen ? (
        <div>
          <MapWindow result={props.results} lat={props.lat} long={props.long} timeOption={props.timeOption} />
          <div>
          <MaximiseMap onClick={props.toggleMap}>Map Full</MaximiseMap>
          <Span>
Leaflet | Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a></Span>
          </div>
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
            adviceCentres={props.adviceCentres}
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
          <MinimiseMap onClick={props.toggleMap}>Minimise</MinimiseMap>
        </div>
      )}
    </div>
  );
};

export default Home;
