import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth.jsx'; // ✅ import auth context
import '../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();         // ✅ get login function from context
  const navigate = useNavigate();      // ✅ redirect after login

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login logic
    const userData = {
      email,
      name: email.split('@')[0], // Just a placeholder name
    };

    login(userData);             // ✅ update auth context
    navigate('/UserProfile');       // ✅ redirect after login
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;
