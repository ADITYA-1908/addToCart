import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Total count of items in cart
  const cartCount = cartItems.length;

  // Total price of items in cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, cartCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
