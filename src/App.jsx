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
import Footer from "./Components/Sections/Footer.jsx"; // ✅ import Footer

const FooterWrapper = () => {
  const location = useLocation();

  // Hide footer only on Login page
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

        {/* ✅ Footer is shown on all pages except login */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
