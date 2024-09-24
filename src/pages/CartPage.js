import React from "react";
import HeaderBar from "../components/HeaderBar";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div>
      <HeaderBar />
      <Cart />
      <Link to="/">
        <button className="link-button">Home</button>
      </Link>
    </div>
  );
}

export default CartPage;
