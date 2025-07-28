import React, { useState } from 'react';
import { useCart } from '../context/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showPlusOne, setShowPlusOne] = useState(false);

  // This function *is used* by the button below
  const handleAddToCart = () => {
    addToCart(product);
    setShowPlusOne(true);

    // Hide the +1 after 800ms
    setTimeout(() => {
      setShowPlusOne(false);
    }, 800);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="price">${product.price.toFixed(2)}</div>

      <div className="button-wrapper">
        <button onClick={handleAddToCart}>Add to Cart</button>

        {/* This conditionally renders the +1 animation */}
        {showPlusOne && <span className="plus-one">+1</span>}
      </div>
    </div>
  );
};

export default ProductCard;
