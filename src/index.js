import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ColorMode";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <CartProvider productsInCart={[]}>
        <App />
      </CartProvider>
    </ThemeProvider>
  </BrowserRouter>
);
