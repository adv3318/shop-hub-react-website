import { createContext, useContext, useState } from 'react';

import { getProductById } from '@/data/products.js';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const productId = Number(id);
    const existing = cartItems.find((item) => item.id === productId);

    if (existing) {
      const currentQuantity = existing.quantity;
      const updateCartItems = cartItems.map((item) =>
        item.id === productId ? { id: productId, quantity: currentQuantity + 1 } : item,
      );
      setCartItems(updateCartItems);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  };

  const getCartItemsWithProducts = () => {
    return cartItems
      .map((item) => ({
        ...item,
        product: getProductById(Number(item.id)),
      }))
      .filter((item) => item.product);
  };

  const removeFormCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity >= 1) {
      setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity } : item)));
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => {
      const product = getProductById(item.id);
      return acc + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        updateQuantity,
        removeFormCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCart must be used within <CartProvider>');

  return context;
};
