import React from "react";
import SearchForm from "./search/SearchForm";
import Voucher from "../voucher/Voucher";
import MapWindow from "./map/MapWindow";
import DetailedResult from "../detailedResult/DetailedResult";
import Navbar from "../Navbar";

const Home = ({ ...props }) => (
  <div>
    <Navbar />
    <MapWindow />
    <SearchForm
      {...props}
      handleChange={this.handleChange}
      handleTime={this.handleTime}
      toggleAdviceCentres={this.toggleAdviceCentres}
      checkPostcode={this.checkPostcode}
    />
  </div>
);
export default Home;
