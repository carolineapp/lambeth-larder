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
      width: 50%;
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
      width: 80%;
      margin: auto;
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
      width: 10%;
    }
  `;

 
  return (
    <div>
      <Header>
        <Navbar />
        <Title>Emergency Food</Title>
      </Header>
      {!props.fullScreen ? (
        <div>
          <MapWindow
            result={props.results}
            lat={props.lat}
            long={props.long}
            timeOption={props.timeOption}
            advice={props.adviceCentres}
          />
          <div>
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
        </div>
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
