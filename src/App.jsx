// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/ProductPage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact-Us.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import ProductGrid from './components/Product-Grid.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/SignUp.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import UserProfile from './pages/UserProfile.jsx';
import './styles/App.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-grid" element={<ProductGrid />} />
            <Route
              path="/UserProfile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
