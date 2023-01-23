import React from "react";
import { Link } from "react-router-dom";
import "./allCrypto.css";

const AllCrypto = () => {
  return (
    <>
      <div className="dashboard__crypto-container">
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link gradient__text">
            <Link to="/crypto/bar">
              <h2>SEE BAR CHART DASHBOARD</h2>
            </Link>
          </div>
        </div>
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link gradient__text">
            <Link to="/crypto/line">
              <h2>SEE LINE CHART DASHBOARD</h2>
            </Link>
          </div>
        </div>
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link gradient__text">
            <Link to="/crypto/doughnut">
              <h2>SEE DOUGHNUT DASHBOARD</h2>
            </Link>
          </div>
        </div>
        <div className="dashboard__crypto-section section__padding">
          <div className="dashboard__crypto-image"></div>
          <div className="dashboard__crypto-link gradient__text">
            <Link to="/crypto/pie">
              <h2>SEE PIE CHART DASHBOARD</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCrypto;
