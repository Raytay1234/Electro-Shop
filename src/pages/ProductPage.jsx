// src/pages/ProductsPage.jsx
import React from 'react';
import ProductList from '../components/ProductList.jsx'; // Handles rendering grid & cards
import '../styles/ProductPage.css'; // Styles for the products page

export default function ProductsPage() {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <ProductList />
    </div>
  );
}
