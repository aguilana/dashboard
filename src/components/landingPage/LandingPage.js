import React from "react";
import "../../styles/css/App.css";
import { Header, DataCharts } from "../";
import { useAuth } from "../context/AuthContext"


const LandingPage = () => {

  const { currentUser } = useAuth();
  return (
    <>
      <Header />
      {currentUser ? <DataCharts/> : null}
    </>
  );
};

export default LandingPage;
