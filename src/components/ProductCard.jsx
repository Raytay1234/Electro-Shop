import React, { useState } from 'react';
import { useCart } from '../context/useCart';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPlusOne(true);

    setTimeout(() => {
      setShowPlusOne(false);
    }, 800);
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
      </div>

      {/* Actions */}
      <div className="product-actions">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Add to Cart
        </button>

        {showPlusOne && <span className="plus-one">+1</span>}
      </div>
    </div>
  );
};

export default ProductCard;
