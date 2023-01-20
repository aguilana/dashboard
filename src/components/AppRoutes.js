import { USA, LandingPage, TEST } from "./";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route to="/" element={<LandingPage/>}/>
        <Route path="/usa" element={<USA />} />

        <Route path="/test-data" element={<TEST/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
