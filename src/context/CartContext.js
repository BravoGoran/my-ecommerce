import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ productsInCart, children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updatedCartItems = productsInCart.map((item) => item.value);
    setCartItems(updatedCartItems);
  }, [productsInCart]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isProductInCart = prevItems.some((item) => item.id === product.id);
      if (!isProductInCart) {
        return [...prevItems, product];
      } else {
        const updatedCartItems = cartItems.filter(
          (item) => item.id !== product.id
        );
        setCartItems(updatedCartItems);
      }
      return prevItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
