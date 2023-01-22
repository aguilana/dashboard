import { USA, LandingPage, TEST, ISS, AllCrypto } from "./";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route to="/" element={<LandingPage />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/test-data" element={<TEST />} />
        <Route path="/iss" element={<ISS />} />
        <Route path="/crypto" element={<AllCrypto />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
