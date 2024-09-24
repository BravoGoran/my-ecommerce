import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>Precio: {item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3>Precio Total: ${calculateTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
