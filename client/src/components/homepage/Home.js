import React from "react";
import SearchForm from "./search/SearchForm";
import Voucher from "../voucher/Voucher";
import MapWindow from "./map/MapWindow";
import DetailedResult from "../detailedResult/DetailedResult";
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
