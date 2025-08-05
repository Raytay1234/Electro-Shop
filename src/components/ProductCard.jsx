import React, { useState } from 'react';
import { useCart } from '../context/useCart';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPlusOne(true);

    setTimeout(() => {
      setShowPlusOne(false);
    }, 800);
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
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

        <p className={`product-description ${expanded ? 'expanded' : ''}`}>
          {product.description}
        </p>

        {/* Show "Read More" only if description is long */}
        {product.description.length > 100 && (
          <button
            className="read-more-btn"
            onClick={toggleDescription}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}

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
