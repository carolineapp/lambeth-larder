import React from "react";
import SearchForm from "./search/SearchForm";
import Voucher from "../voucher/Voucher";
import MapWindow from "./map/MapWindow";
//import DetailedResult from "../detailedResult/DetailedResult";
import Navbar from "../Navbar";
import ResultItems from "./results/ResultItems";

const Home = ({ ...props }) => {
  return (
    <div>
      <Navbar />
      <MapWindow results={props.results} />
      <SearchForm
        handleChange={props.handleChange}
        handleTime={props.handleTime}
        toggleAdviceCentres={props.toggleAdviceCentres}
        checkPostcode={props.checkPostcode}
      />
      <ResultItems result={props.results} />
    </div>
  );
};

export default Home;
