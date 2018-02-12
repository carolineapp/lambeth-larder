import React from "react";
import SearchForm from "./search/SearchForm";
import MapWindow from "./map/MapWindow";
import Navbar from "../Navbar";

const Home = ({ ...props }) => {
  return (
    <div>
      <Navbar />
      <MapWindow />
      <SearchForm
        {...props}
        handleChange={props.handleChange}
        handleTime={props.handleTime}
        toggleAdviceCentres={props.toggleAdviceCentres}
        checkPostcode={props.checkPostcode}
      />
    </div>
  );
};

export default Home;
