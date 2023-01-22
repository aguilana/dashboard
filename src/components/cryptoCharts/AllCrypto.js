import React from "react";
import { Link } from "react-router-dom";

const AllCrypto = () => {
  return (
    <>
      <div className="dashboard__crypto-container">
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link">
            <Link to="/crypto/bar"> SEE DASHBOARD </Link>
          </div>
        </div>
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link">
            <Link to="/crypto/line"> SEE DASHBOARD </Link>
          </div>
        </div>
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link">
            <Link to="/crypto/doughnut"> SEE DASHBOARD </Link>
          </div>
        </div>
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link">
            <Link to="/crypto/pie"> SEE DASHBOARD </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCrypto;
