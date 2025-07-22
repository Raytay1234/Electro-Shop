import React, { useState } from 'react';
import ProductList from '../components/ProductList.jsx';
import '../styles/ProductPage.css';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1500);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setMaxPrice(1500);
  };

  return (
    <div className="products-page">
      <h2>Our Products</h2>

      <div className="filters">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Selector */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Computers">Computers</option>
          <option value="Audio">Audio</option>
          <option value="Components">Components</option>
        </select>

        {/* Price Range */}
        <div className="price-range">
          <label>Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="0"
            max="1500"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* Reset Button */}
        <button className="reset-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {/* Product List */}
      <ProductList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        maxPrice={maxPrice}
      />
    </div>
  );
}
