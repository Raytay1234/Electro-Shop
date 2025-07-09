import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const uniqueItem = {
      ...product,
      id: Date.now() + Math.random(), // Ensures uniqueness
      quantity: 1, // Optional: keeping this in case you need it elsewhere
      price: product.price || 0, // Ensure price is defined
      name: product.name || 'name', // Ensure name is defined
      image: product.image || '/pics/default.jpg', // Fallback image path
      description: product.description || 'No description available', // Fallback description
    };
    setCartItems((prev) => [...prev, uniqueItem]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
