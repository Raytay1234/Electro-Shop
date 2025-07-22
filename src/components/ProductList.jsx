// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard.jsx';
import products from '../data/Products.js';

const ProductList = ({ searchQuery = '', selectedCategory = 'All', maxPrice = Infinity }) => {
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;

    return nameMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="no-results">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
