// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard.jsx';
import products from '../data/Products.js';

const ProductList = ({
  searchQuery = '',
  selectedCategory = 'All',
  maxPrice = Infinity,
  currentPage = 1,
  productsPerPage = 6
}) => {
  // Filter products
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    return nameMatch && categoryMatch && priceMatch;
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="product-list">
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="no-results">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
