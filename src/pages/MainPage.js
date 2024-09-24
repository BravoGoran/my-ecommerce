import React from "react";
import HeaderBar from "../components/HeaderBar";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <HeaderBar />
      <ProductList />
      <Link to="/cart">
        <button className="link-button">Ir al Carrito</button>
      </Link>
    </div>
  );
}

export default MainPage;
