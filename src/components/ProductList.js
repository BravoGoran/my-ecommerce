import React, { useContext } from 'react';
import { ColorMode } from '../context/ColorMode';

const ProductList = () => {
  const { theme } = useContext(ColorMode);

  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$15' },
    { id: 3, name: 'Product 3', price: '$20' },
  ];

  return (
    <div className={`product-list ${theme}`}>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
