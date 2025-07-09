// src/pages/ProductsPage.jsx
import React from 'react';
import ProductList from '../components/ProductList.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ProductGrid from '../components/Product-Grid.jsx';

export default function ProductsPage() {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <ProductList />
    </div>
  );
}
