import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../API/CartContext.jsx";
import Loading from "../Loading/Loading.jsx";
import Cart from "./Cart"; // import the new Cart component
const Navbar = ({
  searchQuery,
  setSearchQuery,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);

    setSearchQuery("");
  };
  const handleLogoutLoding = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };
  return (
    <>
      {isLoading && <Loading />}
      <header className="bg-slate-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a
                href="/home"
                className="text-teal-400 font-bold text-2xl tracking-wide hover:text-teal-300 transition"
              >
                MyCart
              </a>
            </div>

            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for Products, Brands and More"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="block w-full h-10 pl-4 pr-10 py-2 rounded bg-white border border-gray-300 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            {/* Category Dropdown */}
            <div className="relative">
              {/* Dropdown Toggle Button */}
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between w-48 px-4 py-2 text-white rounded p-0.5 bg-gradient-to-r from-teal-400 to-blue-500"
                style={{ height: "35px", width: "150px" }}
              >
                <span style={{ marginLeft: "20px" }}>
                  {selectedCategory || "All Categories"}
                </span>
                <svg
                  style={{ marginRight: "10px" }}
                  className={`w-4 h-4 ml-2 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-38 rounded-md shadow-lg z-50 border border-gray-200">
                  <ul className="py-1  text-sm text-gray-700">
                    <li
                      onClick={() => handleCategoryChange("")}
                      className="h-10 w-38 flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 font-medium cursor-pointer hover:bg-blue-100 rounded-t-md"
                    >
                      All Categories
                    </li>
                    {categories.map((category, index) => (
                      <li
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`h-10 w-38 flex items-center justify-center  px-4 py-2 bg-blue-50 text-blue-600 font-medium cursor-pointer hover:bg-blue-100 rounded-t-md ${
                          index === categories.length - 1 ? "rounded-b-md" : ""
                        }`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-6">
              <div
                style={{ paddingRight: "50px" }}
                className="relative flex items-center space-x-1 cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <FiShoppingCart className="h-6 w-6 text-white group-hover:text-teal-300 transition" />
                <span className="text-white font-medium text-sm group-hover:text-teal-300 transition">
                  Cart
                </span>
                <span className="absolute -top-2 left-3 bg-yellow-200 text-black text-xs h-4 w-4 text-center rounded-full">
                  {cartCount}
                </span>
              </div>

              <div className="h-10 w-28 rounded p-0.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-red-600 hover:to-orange-500 transition">
                <button
                  onClick={(handleLogout, handleLogoutLoding)}
                  className="h-full w-full text-white text-sm font-medium rounded-md"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conditionally render */}
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
