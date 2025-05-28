import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import ApiData from "./Components/API/ApiData.jsx";
import Login from "./Components/Login.jsx";
import Cart from "./Components/Sections/Cart.jsx";
import Footer from "./Components/Sections/Footer.jsx";

const FooterWrapper = () => {
  const location = useLocation();

  const hideFooterPaths = ["/"];

  return !hideFooterPaths.includes(location.pathname) ? <Footer /> : null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ApiData />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
