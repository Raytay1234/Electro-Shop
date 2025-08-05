import React from 'react';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductCard.css'; // Assuming you have styles for the grid

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product, i) => (
      <ProductCard key={i} product={product} />
    ))}
  </div>
);

export default ProductGrid;