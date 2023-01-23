import React from "react";
import { Link } from "react-router-dom"
import "./dataCharts.css"


import data from "../../assets/data.png";
import iss from "../../assets/iss.png";
import eye from "../../assets/eye.png"
import coin from "../../assets/crypto.png"

const dataSrc =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2F1400%2F67607955080161.597768d22e415.gif&f=1&nofb=1&ipt=e03bc8cf45482f2e300fdf219cc33fdf84bc9d3c0f311c24e0333602283605d2&ipo=images";

const DataCharts = () => {
  return (
    <>
      <div className="dashboard__landing-page">
        <div className="section__padding dashboard__landing-page__heading">
          <h1 className="gradient__text"> PROJECTS TO SEE </h1>
          <hr />
        </div>
        <div className="dashboard__landing-page-data section__padding gradient__bg">
          <div className="dashboard__landing-page-image">
            <img src={dataSrc} />
          </div>
          <div className="dashboard__landing-page-link gradient__text">
            <Link to="/usa">DATA VIZ</Link>
          </div>
        </div>
        <div className="dashboard__landing-page-d3 section__padding">
          <div className="dashboard__landing-page-link">
            <Link to="/test-data" className="gradient__text">
              TEST DATA USING D3
            </Link>
          </div>
          <div className="dashboard__landing-page-image">
            <img src={eye} alt="" />
          </div>
        </div>
        <div className="dashboard__landing-page-iss section__padding gradient__bg">
          <div className="dashboard__landing-page-image">
            <img src={iss} alt="data visual" />
          </div>
          <div className="dashboard__landing-page-link">
            <Link to="/iss" className="gradient__text">
              TRACKING: WHERE IS THE ISS?
            </Link>
          </div>
        </div>
        <div className="dashboard__landing-page-d3 section__padding">
          <div className="dashboard__landing-page-link">
            <Link to="/crypto" className="gradient__text">
              CRYPTO
            </Link>
          </div>
          <div className="dashboard__landing-page-image">
            <img src={coin} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCharts;
