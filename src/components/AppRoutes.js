import { USA, LandingPage } from "./";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route to="/" element={<LandingPage/>}/>
        <Route path="/usa" element={<USA />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
