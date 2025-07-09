import React from 'react';
import '../styles/ProductCard.css';
import { useCart } from '../context/useCart.jsx';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div className="price">${product.price.toFixed(2)}</div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;