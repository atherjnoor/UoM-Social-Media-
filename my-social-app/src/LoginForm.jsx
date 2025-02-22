import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Ensure this path is correct
import Logo from './Logo.png'; // Ensure this path is correct

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock login logic
    if (username === 'user123' && password === 'password123') {
      setError('');
      alert('Login successful!');
      navigate('/profile'); // Navigate to the profile page on success
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="signup-page">
      <img src={Logo} alt="Logo" className="logo" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Error Message */}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {/* Remember Me and Forgot Password */}
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        {/* Login Button */}
        <button type="submit">Login</button>

        {/* Register Link */}
        <div className="register-link">
          <p>Don't have an account? <a href="/signup">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;