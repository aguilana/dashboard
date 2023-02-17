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
  SignUp,
  Login,
  ProtectedRoutes,
  Account,
  MyLocation,
} from "./";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const AppRoutes = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route to="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/usa"
            element={
              <ProtectedRoutes>
                <USA />
              </ProtectedRoutes>
            }
          />
          <Route path="/test-data" element={<TEST />} />
          <Route path="/iss" element={<ISS />} />
          <Route path="/crypto" element={<AllCrypto />} />
          <Route path="/crypto/bar" element={<CryptoBar />} />
          <Route path="/crypto/line" element={<CryptoLine />} />
          <Route path="/crypto/pie" element={<CryptoPie />} />
          <Route path="/crypto/doughnut" element={<CryptoDoughnut />} />
          <Route
            path="/my-account"
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/location"
            element={
              <ProtectedRoutes>
                <MyLocation />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default AppRoutes;
