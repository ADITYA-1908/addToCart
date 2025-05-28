import { useCart } from "../API/CartContext.jsx";
import Navbar from "./Navbar";

const Cart = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <>
      <Navbar />

      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl 2">
          <h2
            style={{ marginTop: "20px" }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Shopping Cart
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <table
              style={{ marginTop: "30px" }}
              className="w-full table-auto border-collapse border border-gray-300"
            >
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Image</th>
                  <th className="border border-gray-300 p-2">Title</th>
                  <th className="border border-gray-300 p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ id, title, price, image }) => (
                  <tr key={id}>
                    <td className="border border-gray-300 p-2 text-center">
                      <img
                        src={image}
                        alt={title}
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">{title}</td>
                    <td className="border border-gray-300 p-2 text-indigo-600 font-bold">
                      ${price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan="2"
                    className="border border-gray-300 p-2 font-semibold text-right"
                  >
                    Total:
                  </td>
                  <td className="border border-gray-300 p-2 font-bold text-indigo-600">
                    ${totalPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
