import React from 'react';
import products from '../data/Products.js';
import ProductCard from '../components/ProductCard.jsx';

export default function ProductList() {
  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
    
  );
}
