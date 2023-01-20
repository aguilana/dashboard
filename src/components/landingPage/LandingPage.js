import React from "react";
import "../../styles/css/App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
        <h1>LANDING PAGE</h1>
        <div>
          <Link to="/usa" style={{textDecoration: "none", color: "white"}}> USA DATA </Link>
        </div>
        <div>
          <Link to='/test-data' style={{textDecoration: "none", color: "white"}}> TEST DATA USING D3 </Link>
        </div>
    </>
  );
};

export default LandingPage;