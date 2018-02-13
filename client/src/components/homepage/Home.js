import React from "react";
import SearchForm from "./search/SearchForm";
import MapWindow from "./map/MapWindow";
import Navbar from "../Navbar";
import ResultItems from "./results/ResultItems";

const Home = ({ ...props }) => {


  return (
    <div>
      <Navbar />
      <MapWindow result={props.results} />
      <SearchForm
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
