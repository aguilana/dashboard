import "../styles/css/App.css";
import { AppRoutes, NavBar, Footer } from "./";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="gradient__bg">
          <NavBar />
        </div>
        <AppRoutes />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
