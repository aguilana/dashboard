import "../styles/css/App.css";
import { AppRoutes, NavBar, Footer } from "./";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
      </div>
        <AppRoutes />
        <Footer />
    </div>
  );
}

export default App;
