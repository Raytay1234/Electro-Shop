import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGrid.css';

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product, i) => (
      <ProductCard key={i} product={product} />
    ))}
  </div>
);

export default ProductGrid;