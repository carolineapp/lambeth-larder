import React from "react";
import SearchForm from "./search/SearchForm";
import MapWindow from "./map/MapWindow";
import Navbar from "../Navbar";
import ResultItems from "./results/ResultItems";
import styled from "styled-components";
import LargeMap from "./map/LargeMap";

const Home = props => {
  const Title = styled.div`
    font-size: 1.25rem
    height: 15vh;
    display: flex;
    align-items: center;
    padding-left: 5vw;
    margin-top: 4%;
    padding-bottom: 4%;
    color: rgba(0, 0, 0, 0.5);
     @media screen and (min-width: 600px) {
      margin-left: 5%;
      margin-top:0;
      margin-bottom: 0;
      font-size: 1.25rem;
    }
  `;

  const Header = styled.header`
    width: 100%;
    background: white;
  `;

  const Span = styled.p`
    font-size: 0.5rem;
    padding-left: 3%;
    margin: 0%;
    display: block;
    line-height: 2.5vh;
    @media screen and (min-width: 600px) {
      font-size: 0.8rem;
      width: 70%;
    }
  `;

  const MinimiseMap = styled.button`
    background: #e71242;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    font-size: 0.875rem;
    width: 30%;
    margin: 0;
    @media screen and (min-width: 600px) {
      width: 10%;
    }
  `;
  const MapNavAttribution = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5vh;
    width: 100%;
    background-color: white;
    @media screen and (min-width: 600px) {
      width: 100%;
      text-align: right;
    }
  `;
  const MaximiseMap = styled.button`
    background: #e71242;
    border: none;
    color: white;
    font-size: 0.875rem;
    width: 30%;
    margin: 0;
    @media screen and (min-width: 600px) {
      width: 30%;
    }
  `;
  const AllResultsContainer = styled.div`
    @media screen and (min-width: 600px) {
      display: flex;
      margin-left: 5vw;
      margin-right: 5vw;
    }
  `;
  const ListContainer = styled.div`
    @media screen and (min-width: 600px) {
      ${"" /* width: 45vw; */} height: 80vh;

      overflow-y: scroll;
    }
    @media screen and (min-width: 950px) {
      width: 35vw;
    }
  `;
  const MapContainer = styled.div`
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  `;

  return (
    <div>
      <Header>
        <Navbar />
        <Title>Emergency Food</Title>
      </Header>
      {!props.fullScreen ? (
        <AllResultsContainer>
          <MapContainer>
            <MapWindow
              result={props.results}
              lat={props.lat}
              long={props.long}
              timeOption={props.timeOption}
              advice={props.adviceCentres}
              onClick={props.toggleMap}
            />
            <MapNavAttribution>
              <MaximiseMap onClick={props.toggleMap}>Map Full</MaximiseMap>
              <Span>
                Leaflet | Map data &copy;{" "}
                <a href="http://openstreetmap.org">OpenStreetMap</a>{" "}
                contributors,{" "}
                <a href="http://creativecommons.org/licenses/by-sa/2.0/">
                  CC-BY-SA
                </a>, Imagery © <a href="http://mapbox.com">Mapbox</a>
              </Span>
            </MapNavAttribution>
          </MapContainer>
          <ListContainer>
            <SearchForm
              handleClick={props.handleClick}
              handlePostcode={props.handlePostcode}
              handleTime={props.handleTime}
              toggleAdviceCentres={props.toggleAdviceCentres}
              adviceCentres={props.adviceCentres}
              checkPostcode={props.checkPostcode}
              postcodeErrorMsg={props.postcodeErrorMsg}
              timeOption={props.timeOption}
              postcode={props.postcode}
            />
            <ResultItems
              result={props.results}
              lat={props.lat}
              long={props.long}
              timeOption={props.timeOption}
              adviceCentres={props.adviceCentres}
            />
          </ListContainer>
        </AllResultsContainer>
      ) : (
        <div>
          <LargeMap
            toggleMap={props.toggleMap}
            result={props.results}
            lat={props.lat}
            long={props.long}
            timeOption={props.timeOption}
            advice={props.adviceCentres}
          />
          <MapNavAttribution>
            <MinimiseMap onClick={props.toggleMap}>Minimise</MinimiseMap>
            <Span>
              Leaflet | Map data &copy;{" "}
              <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,{" "}
              <a href="http://creativecommons.org/licenses/by-sa/2.0/">
                CC-BY-SA
              </a>, Imagery © <a href="http://mapbox.com">Mapbox</a>
            </Span>
          </MapNavAttribution>
        </div>
      )}
    </div>
  );
};

export default Home;
