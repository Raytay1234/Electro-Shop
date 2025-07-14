import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // 👈 include useLocation
import useAuth from '../context/useAuth.jsx';
import '../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // 👈 capture previous location

  // fallback to profile if no previous page
  const from = location.state?.from || '/UserProfile';

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake auth logic
    const userData = {
      email,
      name: email.split('@')[0],
    };

    login(userData);
    navigate(from, { replace: true }); // 👈 redirect to where they came from
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
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
