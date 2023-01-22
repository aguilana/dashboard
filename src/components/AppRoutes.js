import {
  USA,
  LandingPage,
  TEST,
  ISS,
  AllCrypto,
  CryptoBar,
  CryptoLine,
  CryptoPie,
  CryptoDoughnut,
} from "./";
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
        <Route path="/crypto/bar" element={<CryptoBar />} />
        <Route path="/crypto/line" element={<CryptoLine />} />
        <Route path="/crypto/pie" element={<CryptoPie />} />
        <Route path="/crypto/doughnut" element={<CryptoDoughnut />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
