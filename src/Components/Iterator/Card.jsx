import { useState } from "react";
import { useCart } from "../API/CartContext.jsx";
import Loading from "../Loading/Loading.jsx";

const Card = ({ id, title, price, image }) => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true); // Show loading spinner
    setTimeout(() => {
      addToCart({ id, title, price, image });
      setLoading(false); // Hide loading spinner after 1 second
    }, 1000);
  };

  return (
    <div
      style={{ marginTop: "30px", marginLeft: "60px", position: "relative" }}
    >
      {loading && <Loading />}
      <div className="h-90 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 text-center">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold mb-2 mt-2">{title}</h3>
        <p className="text-indigo-600 font-bold mb-2">price: ${price}</p>
        <button
          className="w-30 mt-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
          onClick={handleAddToCart}
          style={{ marginTop: "20px", cursor: "pointer" }}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
