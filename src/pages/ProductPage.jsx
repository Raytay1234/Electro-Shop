import React, { useState } from 'react';
import ProductList from '../components/ProductList.jsx';
import products from '../data/Products.js';
import '../styles/ProductPage.css';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1500);
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCTS_PER_PAGE = 6;

  // Filter products
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    return nameMatch && categoryMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setMaxPrice(1500);
    setCurrentPage(1);
  };

  const goToPage = (page) => setCurrentPage(page);
  const goToNextPage = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const goToPreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  return (
    <div className="products-page">
      <h2 className="page-title">Our Products</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Computers">Computers</option>
          <option value="Audio">Audio</option>
          <option value="Components">Components</option>
        </select>

        <div className="price-range">
          <label>Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="0"
            max="1500"
            step="50"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(Number(e.target.value));
              setCurrentPage(1);
            }}
          />
        </div>

        <button className="reset-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {/* Product List */}
      <ProductList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        maxPrice={maxPrice}
        currentPage={currentPage}
        productsPerPage={PRODUCTS_PER_PAGE}
      />

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            ⬅ Prev
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
                onClick={() => goToPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}
