import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, customization = {}) => {
    const cartItem = {
      ...product,
      customization,
      cartId: Date.now() + Math.random(),
    };
    setCart(prev => [...prev, cartItem]);
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
