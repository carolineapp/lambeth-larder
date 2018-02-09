import React from "react";
import Navbar from "../Navbar";

const Voucher = props => {
  return (
    <div className="voucher__body">
      <div>
        <Navbar />
      </div>
      <div className="voucher__container">
        <header>Food Bank Vouchers</header>
        <p>Info about food bank vouchers</p>
      </div>
    </div>
  );
};

export default Voucher;
